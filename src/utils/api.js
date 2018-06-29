import { Apis, ChainConfig } from 'gravity-protocoljs-ws';
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
