export const CONSTANTS = {
  txSuccessSummaryPayloadLocalStorageKey: 'cb_onramp_demo_app_quoteInformation',
};

export const clearTxSuccessSummaryPayloadLocalStorageEntry = () => {
  localStorage.removeItem(CONSTANTS.txSuccessSummaryPayloadLocalStorageKey);
};

export const getTxSuccessSummaryPayloadLocalStorageEntry = <T>() => {
  const item = localStorage.getItem(
    CONSTANTS.txSuccessSummaryPayloadLocalStorageKey
  );

  if (item) {
    return JSON.parse(item) as T;
  } else {
    return null;
  }
};

export const setTxSuccessSummaryPayloadLocalStorageEntry = (item: unknown) => {
  localStorage.setItem(
    CONSTANTS.txSuccessSummaryPayloadLocalStorageKey,
    JSON.stringify(item)
  );
};
