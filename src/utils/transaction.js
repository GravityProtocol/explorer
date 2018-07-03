import { ChainTypes } from 'gravity-protocoljs';
import { startCase } from 'lodash';

export const TRX_TRANSFER_ID = 0;
export const TRX_ACCOUNT_CREATE_ID = 5;
export const TRX_BALANCE_CLAIM_ID = 37;

export const getTrnxType = (trnxId) => {
  const operationsNames = Object.keys(ChainTypes.operations);
  const name = startCase(operationsNames[trnxId]);
  let color;

  if (trnxId >= 0 && trnxId <= 4) {
    color = '#3dc67d';
  } else if (trnxId >= 5 && trnxId <= 9) {
    color = '#99a4b7';
  } else if ((trnxId >= 10 && trnxId <= 19) || (trnxId >= 42 && trnxId <= 45)) {
    color = '#476aed';
  } else if (trnxId >= 20 && trnxId <= 21) {
    color = '#b555a7';
  } else if (trnxId >= 22 && trnxId <= 24) {
    color = '#e3bc6d';
  } else if (trnxId >= 25 && trnxId <= 28) {
    color = '#b58f7b';
  } else if (trnxId >= 29 && trnxId <= 31) {
    color = '#50bad5';
  } else if (trnxId >= 32 && trnxId <= 33) {
    color = '#476aed';
  } else if (trnxId >= 34 && trnxId <= 41) {
    color = '#ff6752';
  } else {
    color = '#476aed';
  }

  return { color, name };
};
