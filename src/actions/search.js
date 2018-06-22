export const ENABLE_SEARCH = 'ENABLE_SEARCH';
export const DISABLE_SEARCH = 'DISABLE_SEARCH';

export const enableSearch = () => ({
  type: ENABLE_SEARCH,
});

export const disableSearch = () => ({
  type: DISABLE_SEARCH,
});
