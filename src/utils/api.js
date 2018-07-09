import { startCase } from 'lodash';
import { Apis, ChainConfig } from 'gravity-protocoljs-ws';
import { FetchChain, ChainTypes } from 'gravity-protocoljs';
import { TRX_TRANSFER_ID, TRX_ACCOUNT_CREATE_ID, TRX_BALANCE_CLAIM_ID } from 'utils/transaction';
import sortMembers from 'utils/sort-members';
import config from '../../package.json';

const { bpabApiUrl } = config;

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
  getAccounts([id]).then(accounts => accounts[id]);

export const getAccountByName = name =>
  Apis.instance().db_api().exec('get_account_by_name', [name]);

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
        .then(witnessesData => sortMembers(witnessesData, witnessesID, activeWitnesses)));

export const getCommittee = () =>
  getGlobalProperties()
    .then((globalProperties) => {
      const activeCommittee = globalProperties.active_committee_members;

      return Apis.instance().db_api().exec('lookup_committee_member_accounts', ['', 100])
        .then(committeeID => ({ committeeID, activeCommittee }));
    })
    .then(({ committeeID, activeCommittee }) =>
      Apis.instance().db_api().exec('get_committee_members', [committeeID.map(i => i[1])])
        .then(committeeData => sortMembers(committeeData, committeeID, activeCommittee)));

export const getFee = () =>
  getGlobalProperties()
    .then((globalProperties) => {
      const operationsNames = Object.keys(ChainTypes.operations);

      return operationsNames.map((item, index) => ({
        name: startCase(item),
        ...globalProperties.parameters.current_fees.parameters[index],
      }));
    });

export const getLastTransactions = () =>
  fetch(`${bpabApiUrl}/lastnetworkops`)
    .then(resp => resp.json())
    .then((data) => {
      if (data && data.length) {
        return data;
      }

      throw new Error();
    })
    .then(data => data.map(item => ({
      id: item[2],
      timestamp: item[6],
      block: item[3],
      type: item[9],
    })));

export const getDashbord = () =>
  Promise.all([
    getAccountsCounts(),
    Apis.instance().db_api().exec('get_dynamic_global_properties', []),
    Apis.instance().db_api().exec('get_objects', [['2.3.0']]),
    getGlobalProperties(),
  ])
    .then(data => ({
      usersCount: +data[0],
      currentBlock: +data[1].head_block_number,
      currentSupply: +data[2][0].current_supply,
      activeWitnesses: +data[3].active_witnesses.length,
      activeCommittee: +data[3].active_committee_members.length,
    }));
