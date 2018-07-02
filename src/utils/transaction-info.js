import { ChainTypes } from 'gravity-protocoljs';
import { startCase } from 'lodash';

export default function (trnxNum) {
  const operationsNames = Object.keys(ChainTypes.operations);
  const name = startCase(operationsNames[trnxNum]);

  let color;

  if (trnxNum >= 0 && trnxNum <= 4) {
    color = '#3dc67d';
  } else if (trnxNum >= 5 && trnxNum <= 9) {
    color = '#7840dd';
  } else if ((trnxNum >= 10 && trnxNum <= 19) || (trnxNum >= 42 && trnxNum <= 45)) {
    color = '#b555a7';
  } else if (trnxNum >= 20 && trnxNum <= 21) {
    color = '#edbf56';
  } else if (trnxNum >= 22 && trnxNum <= 24) {
    color = '#e38c59';
  } else if (trnxNum >= 25 && trnxNum <= 28) {
    color = '#50bad5';
  } else if (trnxNum >= 29 && trnxNum <= 31) {
    color = '#b58f7b';
  } else if (trnxNum >= 32 && trnxNum <= 33) {
    color = '#476aed';
  } else if (trnxNum >= 34 && trnxNum <= 41) {
    color = '#ff6752';
  } else {
    color = '#e86c95';
  }

  return { color, name };
}
