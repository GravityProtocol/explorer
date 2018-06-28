import { Apis, ChainConfig } from 'gravity-protocoljs-ws';

export const SET_INITIALIZED = 'SET_INITIALIZED';

ChainConfig.setPrefix('ZGV');
ChainConfig.networks.gravity = {
  core_asset: 'ZGV',
  address_prefix: 'ZGV',
  chain_id: 'ab5071857c28ddbc872d0ca508725fa3006ea7bdfda10f707433021f570fc27e',
};

const nodes = [
  'wss://grvapi.graphenelab.org/ws',
  'wss://api-0.gravityprotocol.org/ws',
  'wss://api-3.gravityprotocol.org/ws',
  'wss://api-4.gravityprotocol.org/ws',
  'wss://api-6.gravityprotocol.org/ws',
];

export const initialize = () => (
  (dispatch) => {
    const initializeNode = (nodeIndex = 0) => {
      Apis.instance(nodes[nodeIndex], true).init_promise
        .then(() => {
          dispatch({
            type: SET_INITIALIZED,
            data: true,
          });
        })
        .catch(() => {
          initializeNode(nodeIndex < nodes.length ? nodeIndex + 1 : 0);
        });
    };

    initializeNode();
  }
);
