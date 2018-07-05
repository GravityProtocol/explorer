import { sortBy } from 'lodash';
import { Apis, ChainConfig } from 'gravity-protocoljs-ws';
import { FetchChain } from 'gravity-protocoljs';
import { TRX_TRANSFER_ID, TRX_ACCOUNT_CREATE_ID, TRX_BALANCE_CLAIM_ID } from 'utils/transaction';
import config from '../../package.json';

ChainConfig.setPrefix(config.chainConfigPrefix);
ChainConfig.networks.gravity = config.chainConfig;

export const initializeApi = () =>
  new Promise((resolve) => {
    const { nodes } = config;

    const initializeNode = (nodeIndex = 0) => {
      Apis.instance(nodes[nodeIndex], true).init_promise
        .then(() => {
          resolve();
        })
        .catch(() => {
          initializeNode(nodeIndex < nodes.length ? nodeIndex + 1 : 0);
        });
    };

    initializeNode();
  });

export const getAccountsCounts = () =>
  Apis.instance().db_api().exec('get_account_count', []);

export const getAccounts = ids =>
  Apis.instance().db_api().exec('get_full_accounts', [ids, true])
    .then((data) => {
      const accounts = {};

      data.forEach((item) => {
        const [id, account] = item;

        accounts[id] = account;
      });

      return accounts;
    });

export const getAccount = id =>
  getAccounts([id])
    .then(accounts => accounts[id]);

export const getGlobalProperties = () =>
  Apis.instance().db_api().exec('get_global_properties', []);

export const getWitnessesData = activeWitnesses =>
  Apis.instance().db_api().exec('get_witnesses', [activeWitnesses]);

export const getAccountWithWitness = name =>
  FetchChain('getAccount', name)
    .then((acc) => {
      const id = acc.get('id');

      return Promise.all([
        getGlobalProperties(),
        getAccounts([id]),
      ])
        .then((data) => {
          const activeWitnesses = data[0].active_witnesses;
          const account = data[1][id];

          return getWitnessesData(activeWitnesses)
            .then((witnesses) => {
              account.witness = witnesses.find(item => item.witness_account === id);

              return account;
            });
        });
    });

export const getBlock = blockNum =>
  Apis.instance().db_api().exec('get_block', [blockNum]);

export const getHistory = (id, lastId, pageSize = 10) =>
  Apis.instance().history_api().exec('get_account_history', [id, '1.11.0', pageSize, lastId]);

export const getObjects = ids =>
  Apis.instance().db_api().exec('get_objects', [ids]);

export const getTransaction = (blockNum, trxInBlock) =>
  Apis.instance().db_api().exec('get_transaction', [blockNum, trxInBlock]);

export const getTransactionDataById = id =>
  getObjects([id])
    .then(data => data[0])
    .then(operation =>
      getTransaction(operation.block_num, operation.trx_in_block)
        .then(transaction => ({ transaction, operation })))
    .then((data) => {
      if (data.operation.op[0] === TRX_TRANSFER_ID) {
        return Promise.all([
          getAccount(data.operation.op[1].from),
          getAccount(data.operation.op[1].to),
        ])
          .then((result) => {
            [data.operation.op[1].from, data.operation.op[1].to] = result;

            return data;
          });
      } else if (data.operation.op[0] === TRX_ACCOUNT_CREATE_ID) {
        return Promise.all([
          getAccount(data.operation.op[1].referrer),
          getAccount(data.operation.op[1].registrar),
        ])
          .then((result) => {
            [data.operation.op[1].referrer, data.operation.op[1].registrar] = result;

            return data;
          });
      } else if (data.operation.op[0] === TRX_BALANCE_CLAIM_ID) {
        return getAccount(data.operation.op[1].deposit_to_account)
          .then((account) => {
            data.operation.op[1].deposit_to_account = account;

            return data;
          });
      }

      return data;
    });

export const getWitnesses = () =>
  getGlobalProperties()
    .then((globalProperties) => {
      const activeWitnesses = globalProperties.active_witnesses;

      return Apis.instance().db_api().exec('lookup_witness_accounts', ['', 100])
        .then(witnessesID => ({ witnessesID, activeWitnesses }));
    })
    .then(({ witnessesID, activeWitnesses }) =>
      Apis.instance().db_api().exec('get_witnesses', [witnessesID.map(i => i[1])])
        .then((witnessesData) => {
          const witnesses = witnessesData.map(item => ({
            ...item,
            name: witnessesID.find(name => name[1] === item.id)[0],
          }));

          let active = witnesses.filter(i => activeWitnesses.find(j => j === i.id));
          let reserved = witnesses.filter(i => active.indexOf(i) < 0);

          active = sortBy(active, i => +i.total_votes)
            .map((i, index) => ({ ...i, rank: active.length - index }))
            .reverse();

          reserved = sortBy(reserved, i => +i.total_votes)
            .map((i, index) => ({ ...i, rank: reserved.length - (index - active.length) }))
            .reverse();

          return { active, reserved };
        }));
