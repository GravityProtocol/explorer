import moment from 'moment';
import { memoize } from 'lodash';

export const formatAmount = memoize((value = 0) => {
  const amount = Number(value) / 100000;
  const helpString = String(amount).split('.');

  helpString[0] = Math.floor(helpString[0]).toLocaleString('ru-RU');

  return helpString.join('.');
});

export const formatIndex = memoize((value) => {
  const m = 10 ** 4;

  return Math.round(value * m) / m;
});

export const formatDate = memoize(date =>
  moment(date).format('DD.MM.YYYY HH:mm'));

export const formatUrl = memoize((url) => {
  if (url.indexOf('://') === -1 && url !== '') {
    return `//${url}`;
  }

  return url;
});
