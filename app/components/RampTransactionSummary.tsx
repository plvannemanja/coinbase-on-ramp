import { Address } from '@coinbase/onchainkit/identity';
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import ChevronUpIcon from '@heroicons/react/24/outline/ChevronUpIcon';
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCoinbaseRampTransaction } from '../contexts/CoinbaseRampTransactionContext';
import { generateBuyQuote, generateSecureToken } from '../queries';
import { BuyQuoteRequest, TxSuccessSummaryPayload } from '../types';
import { formatCurrency, getCurrencySymbol } from '../utils/currency';
import {
  getTxSuccessSummaryPayloadLocalStorageEntry,
  setTxSuccessSummaryPayloadLocalStorageEntry,
} from '../utils/localStorage';
import { RampTransactionSuccess } from './RampTransactionSuccess';
import { WalletConnector } from './WalletConnector';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';

export const RampTransactionSummary = () => {
  const {
    rampTransaction,
    selectedPurchaseCurrencyNetwork,
    selectedPurchaseCurrency,
    selectedSubdivision,
    setSecureToken,
    secureToken,
    buyQuote,
    setBuyQuote,
    partnerUserId,
    authenticated,
    loadingBuyOptions,
    selectedPaymentMethod,
    sellQuote,
    setSellQuote,
    selectedSellCurrency,
    selectedSellCurrencyNetwork,
    loadingSellOptions,
    isOnrampActive,
    isOfframpActive,
    selectedPaymentMethodLimit,
  } = useCoinbaseRampTransaction();
  const [fetchingQuote, setFetchingQuote] = useState(false);
  const [showExpandedFees, setShowExpandedFees] = useState(false);
  const [txSuccess, setTxSuccess] = useState(false);
  const [txSuccessQuoteSummary, setTxSuccessQuoteSummary] =
    useState<TxSuccessSummaryPayload | null>();

  const queryParams = useSearchParams();

  useEffect(() => {
    const success = queryParams?.get('success');

    if (success) {
      const quoteSummary: TxSuccessSummaryPayload | null =
        getTxSuccessSummaryPayloadLocalStorageEntry<TxSuccessSummaryPayload>();

      if (quoteSummary) {
        setTxSuccess(true);
        setTxSuccessQuoteSummary(quoteSummary);
      }
    }
  }, [queryParams]);

  const isAmountTooLow = useMemo(() => {
    if (rampTransaction?.amount && selectedPaymentMethod) {
      return (
        Number(rampTransaction.amount) < Number(selectedPaymentMethodLimit?.min)
      );
    }

    return true;
  }, [rampTransaction?.amount, selectedPaymentMethod]);

  useEffect(() => {
    const getSecureToken = async () => {
      if (
        rampTransaction?.wallet &&
        selectedPurchaseCurrencyNetwork?.name &&
        selectedPurchaseCurrency?.symbol
      ) {
        try {
          const secureToken = await generateSecureToken({
            ethAddress: rampTransaction?.wallet,
            blockchains: [selectedPurchaseCurrencyNetwork?.name],
            partnerUserId: partnerUserId || undefined,
          });
          setSecureToken(secureToken);
        } catch (err) {
          console.error('Secure Token Fetch Failed', err);
        }
      }
    };

    getSecureToken();
  }, [
    selectedPurchaseCurrencyNetwork,
    rampTransaction?.wallet,
    selectedPurchaseCurrency?.symbol,
    setSecureToken,
    partnerUserId,
  ]);

  const readyToConfirmTransaction = useMemo(() => {
    return secureToken != null;
  }, [secureToken]);

  const getExchangePrice = (decimals = 5) => {
    if (isOnrampActive && buyQuote) {
      return (
        Number(buyQuote.payment_subtotal?.value) /
        Number(buyQuote.purchase_amount?.value)
      ).toFixed(decimals);
    }

    return '0';
  };

  useEffect(() => {
    const fetchBuyQuote = async () => {
      try {
        const payload: BuyQuoteRequest = {
          purchase_currency: selectedPurchaseCurrency?.symbol || '',
          payment_amount: Number(rampTransaction?.amount).toFixed(2),
          payment_currency: String(rampTransaction?.currency),
          payment_method: String(rampTransaction?.paymentMethod),
          country: String(rampTransaction?.country?.id),
          subdivision: String(selectedSubdivision),
          purchase_network: selectedPurchaseCurrencyNetwork?.name || '',
        };

        const response = await generateBuyQuote(payload);

        setBuyQuote(response);
      } catch (err) {
        console.error('Buy Quote Fetch Failed', err);
      }
    };

    const fetchSellQuote = async () => {
      try {
        // TODO: Setup api to return pricing data to calculate
        // amount to be sent to quote api
        // const payload: SellQuoteRequest = {
        //   sell_currency: selectedSellCurrency?.symbol || '',
        //   sell_amount: convertFiatToTokenAmountForSellTransaction(),
        //   cashout_currency: String(rampTransaction?.currency),
        //   payment_method: String(rampTransaction?.paymentMethod),
        //   country: String(rampTransaction?.country?.id),
        //   subdivision: String(selectedSubdivision),
        //   sell_network: selectedSellCurrencyNetwork?.name || '',
        // };
        // const response = await generateSellQuote(payload);
        // setSellQuote(response);
      } catch (err) {
        // console.error('Sell Quote Fetch Failed', err);
        console.error('RECEIVED AN ERORR FOR SELL QUOTE', err as Error);
      }
    };

    setFetchingQuote(true);
    if (isOnrampActive) {
      fetchBuyQuote().then(() => setFetchingQuote(false));
    } else {
      fetchSellQuote().then(() => setFetchingQuote(false));
    }

    const intervalId = setInterval(
      isOnrampActive ? fetchBuyQuote : fetchSellQuote,
      10000
    );

    return () => clearInterval(intervalId);
  }, [
    rampTransaction,
    selectedPurchaseCurrencyNetwork,
    selectedPurchaseCurrency,
    selectedSubdivision,
    setBuyQuote,
    authenticated,
    selectedSellCurrency?.symbol,
    selectedSellCurrencyNetwork?.name,
    setSellQuote,
    isOnrampActive,
  ]);

  const transactionLink = useMemo(() => {
    const quoteId =
      (isOnrampActive && buyQuote?.quote_id
        ? buyQuote.quote_id
        : sellQuote?.quote_id) || '';
    return encodeURI(
      `https://pay.coinbase.com/${isOnrampActive ? 'buy' : 'sell'}/one-click?sessionToken=${secureToken}` +
        `&redirectUrl=${encodeURIComponent(window.location.origin + '?success=true')}` +
        (selectedPurchaseCurrencyNetwork?.name
          ? `&defaultNetwork=${selectedPurchaseCurrencyNetwork.name}`
          : '') +
        (selectedPurchaseCurrency?.id
          ? `&defaultAsset=${selectedPurchaseCurrency.symbol}`
          : '') +
        (rampTransaction?.paymentMethod
          ? `&defaultPaymentMethod=${rampTransaction.paymentMethod}`
          : '') +
        (rampTransaction?.currency
          ? `&fiatCurrency=${rampTransaction.currency}`
          : '') +
        (rampTransaction?.amount
          ? `&presetFiatAmount=${Number(rampTransaction.amount).toFixed(2)}`
          : '') +
        `&quoteId=${quoteId}`
    );
  }, [
    secureToken,
    buyQuote,
    rampTransaction,
    selectedPurchaseCurrencyNetwork,
    selectedPurchaseCurrency,
    sellQuote,
    isOnrampActive,
  ]);

  const launchConfirmTransactionFlow = useCallback(() => {
    if (
      rampTransaction?.amount &&
      rampTransaction?.wallet &&
      selectedPurchaseCurrency?.symbol
    ) {
      setTxSuccessSummaryPayloadLocalStorageEntry({
        deliveryTargetAddress: rampTransaction?.wallet,
        purchaseAmount: Number(rampTransaction.amount),
        purchaseCurrency: selectedPurchaseCurrency?.symbol,
      } as TxSuccessSummaryPayload);
    }
    window.location.href = transactionLink;
  }, [transactionLink]);

  const getTransactionSummaryLabel = () => {
    const action = isOnrampActive ? 'Buy' : 'Sell';
    const currency = isOnrampActive
      ? selectedPurchaseCurrency?.symbol
      : isOfframpActive
        ? selectedSellCurrency?.symbol
        : '';
    return `${action} ${formatCurrency(rampTransaction?.amount || '0', getCurrencySymbol(rampTransaction?.currency))}  of ${currency}`;
  };

  const getAmountReceived = () => {
    return isOnrampActive
      ? `${formatCurrency(buyQuote?.purchase_amount?.value || '0', buyQuote?.purchase_amount?.currency || '', 3, true)}`
      : `${formatCurrency(sellQuote?.sell_amount?.value || '0', sellQuote?.sell_amount?.currency || '', 3, true)}`;
  };

  const getTotalCostLabel = () => {
    const quoteToUse = isOnrampActive ? buyQuote : sellQuote;
    const fees = formatCurrency(
      (
        (Number(quoteToUse?.coinbase_fee?.value) || 0) +
        ((isOnrampActive && Number(buyQuote?.network_fee?.value)) || 0)
      ).toString(),
      getCurrencySymbol(rampTransaction?.currency)
    );
    const currencySymbol = getCurrencySymbol(rampTransaction?.currency);
    const totalCost = formatCurrency(
      (isOnrampActive
        ? buyQuote?.payment_total?.value
        : sellQuote?.cashout_total?.value) || '0',
      currencySymbol
    );

    return (
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>Total</span>
          <span className="text-xs opacity-50">
            including spread + {fees} fees
          </span>
        </div>
        <div className="flex gap-2 ">
          <span className="my-auto">{totalCost}</span>
          {showExpandedFees ? (
            <ChevronUpIcon
              onClick={() => setShowExpandedFees(!showExpandedFees)}
              className="w-4 h-4 my-auto cursor-pointer"
            />
          ) : (
            <ChevronDownIcon
              onClick={() => setShowExpandedFees(!showExpandedFees)}
              className="w-4 h-4 my-auto cursor-pointer"
            />
          )}
        </div>
      </div>
    );
  };

  const getExchangePriceLabel = () => {
    if (isOnrampActive && buyQuote) {
      return `${formatCurrency(
        getExchangePrice(),
        getCurrencySymbol(rampTransaction?.currency)
      )}`;
    } else if (isOfframpActive && sellQuote) {
      return `${formatCurrency(
        getExchangePrice(),
        getCurrencySymbol(rampTransaction?.currency)
      )}`;
    }

    return '-';
  };

  const getTransactionSummaryTitle = () => {
    return isOnrampActive
      ? `Buy ${selectedPurchaseCurrency?.symbol}`
      : `Sell ${selectedSellCurrency?.symbol}`;
  };

  const getExchangePriceHtml = () => {
    return (
      <>
        <span>
          {isOnrampActive
            ? selectedPurchaseCurrency?.symbol
            : selectedSellCurrency?.symbol}{' '}
          Price
        </span>
        <span className="font-bold">{getExchangePriceLabel()}</span>
      </>
    );
  };

  return loadingBuyOptions || loadingSellOptions || fetchingQuote ? (
    <div className="w-full md:p-8 my-auto text-sm">
      <Card>
        <CardHeader>
          <Skeleton className="w-3/5 h-6 rounded-lg" />
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="space-y-4">
            <Skeleton className="w-full h-12 rounded-lg" />
            <div className="border-1 border-white rounded-md p-2">
              <Skeleton className="w-full h-8 rounded-lg mb-2" />
              <Skeleton className="w-full h-8 rounded-lg mb-2" />
              <Skeleton className="w-full h-8 rounded-lg" />
            </div>
            <Skeleton className="w-3/5 h-12 rounded-lg mx-auto" />
            <Skeleton className="w-full h-6 rounded-lg" />
            <Skeleton className="w-full h-6 rounded-lg" />
            <Skeleton className="w-full h-6 rounded-lg" />
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <Skeleton className="w-full h-10 rounded-lg" />
        </CardFooter>
      </Card>
    </div>
  ) : (
    <div className="w-full md:p-8 my-auto text-sm">
      {txSuccess ? (
        <div className="m-auto">
          {txSuccessQuoteSummary && (
            <RampTransactionSuccess summary={txSuccessQuoteSummary} />
          )}
        </div>
      ) : (
        <div className="">
          {isOfframpActive && (
            <Card className="mb-4">
              <CardBody>
                <p className="text-red-500 flex gap-2">
                  <InformationCircleIcon className="w-6 h-6 my-auto" />
                  <span className="my-auto">Sell preview only</span>
                </p>
              </CardBody>
            </Card>
          )}
          <Card className="p-4 min-h-[500px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">Transaction Summary</p>
                <p className="text-small text-default-500">
                  {getTransactionSummaryTitle()}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="space-y-4">
                <div className="flex flex-col justify-between mt-4 mb-8 text-center">
                  <p className="m-auto text-cb-blue text-lg">
                    {getTransactionSummaryLabel()}
                  </p>
                  <div className="flex mx-auto gap-2 mt-4 text-">
                    {getExchangePriceHtml()}
                  </div>
                </div>
                <div className="border-1 border-white rounded-md p-2">
                  <div className="flex justify-between py-4 px-2">
                    <span className="flex items-center gap-2">
                      Amount Received
                    </span>
                    <span className="font-bold">{getAmountReceived()}</span>
                  </div>
                  <Divider />
                  <div className="flex justify-between py-4 px-2">
                    <span>Network:</span>
                    <span className="font-bold capitalize">
                      {selectedPurchaseCurrencyNetwork?.name}
                    </span>
                  </div>
                  <Divider />
                  <div className="flex justify-between py-4 px-2">
                    <span className="flex items-center gap-2">
                      <CreditCardIcon className="w-4 h-4" />
                      Pay With:
                    </span>
                    <span className="font-bold">
                      {rampTransaction?.paymentMethod}
                    </span>
                  </div>
                  <Divider />
                  <div className="flex justify-between py-4 px-2">
                    <span>To:</span>
                    {rampTransaction?.wallet && (
                      <Address
                        className="bg-cb-blue px-2 py-1 rounded h-[30px]"
                        address={
                          (rampTransaction?.wallet || '') as `0x${string}`
                        }
                      />
                    )}
                  </div>
                </div>

                <div className="text-left text-xs opacity-50">
                  Sending funds is a permanent action. For your security, be
                  sure you own the wallet address listed
                </div>

                <div>{getTotalCostLabel()}</div>

                {showExpandedFees && (
                  <>
                    <div className="flex justify-between">
                      <span>Network Fee:</span>
                      <span className="text-slate-500">
                        {Number(buyQuote?.network_fee?.value) == 0
                          ? 'Free'
                          : formatCurrency(
                              buyQuote?.network_fee?.value || '0',
                              getCurrencySymbol(buyQuote?.network_fee?.currency)
                            )}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Coinbase Fee:</span>
                      <span className="text-slate-500">
                        {Number(buyQuote?.coinbase_fee?.value) == 0
                          ? 'Free'
                          : formatCurrency(
                              buyQuote?.coinbase_fee?.value || '0',
                              getCurrencySymbol(
                                buyQuote?.coinbase_fee?.currency
                              )
                            )}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              {!authenticated ? (
                <div className="m-auto">
                  <WalletConnector />
                </div>
              ) : (
                <Button
                  isDisabled={
                    !readyToConfirmTransaction ||
                    isAmountTooLow ||
                    isOfframpActive
                  }
                  onClick={launchConfirmTransactionFlow}
                  className="w-full bg-cb-blue"
                >
                  {isOnrampActive ? 'Buy Now' : 'Sell Now'}{' '}
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};
