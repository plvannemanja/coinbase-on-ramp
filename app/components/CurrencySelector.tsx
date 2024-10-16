import { Autocomplete, AutocompleteItem, Skeleton } from '@nextui-org/react';
import { Key } from 'react';
import { useCoinbaseRampTransaction } from '../contexts/CoinbaseRampTransactionContext';

export const CurrencySelector = () => {
  const {
    isOnrampActive,
    isOfframpActive,
    sellOptions,
    buyOptions,
    setRampTransaction,
    rampTransaction,
    setSelectedPaymentMethod,
    selectedCurrency,
    setSelectedCurrency,
    loadingBuyOptions,
  } = useCoinbaseRampTransaction();

  const handleCurrencySelection = (value: Key | null) => {
    if (value) {
      if (isOnrampActive && buyOptions) {
        const newCurrency =
          buyOptions.payment_currencies.find(
            (currency) => currency.id === value
          ) || null;
        setSelectedCurrency(newCurrency);
        setRampTransaction({
          ...rampTransaction,
          currency: newCurrency?.id,
        });
      } else if (isOfframpActive && sellOptions) {
        const newCurrency =
          sellOptions.cashout_currencies.find(
            (currency) => currency.id === value
          ) || null;
        setSelectedCurrency(newCurrency);
        setRampTransaction({
          ...rampTransaction,
          currency: newCurrency?.id,
        });
      }
    }
  };

  const handlePaymentMethodSelection = (key: Key | null) => {
    const method = selectedCurrency?.limits.find((method) => method.id === key);

    if (method) {
      setSelectedPaymentMethod(method);
      setRampTransaction({
        ...rampTransaction,
        paymentMethod: method.id,
      });
    }
  };

  const getCurrencies = () => {
    return (
      (isOnrampActive
        ? buyOptions?.payment_currencies
        : sellOptions?.cashout_currencies) || []
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {!loadingBuyOptions ? (
          <>
            <Autocomplete
              isClearable={false}
              label="Currency"
              placeholder="Search for a currency"
              className="w-[200px] my-auto"
              onSelectionChange={handleCurrencySelection}
              selectedKey={rampTransaction?.currency}
            >
              {getCurrencies().map((currency) => (
                <AutocompleteItem key={currency.id} value={currency.id}>
                  {currency.id}
                </AutocompleteItem>
              ))}
            </Autocomplete>

            {selectedCurrency && (
              <Autocomplete
                isClearable={false}
                label="Payment Method"
                placeholder="Search for a payment method"
                className="w-[200px] my-auto"
                onSelectionChange={handlePaymentMethodSelection}
                selectedKey={rampTransaction?.paymentMethod}
              >
                {(selectedCurrency?.limits || []).map((paymentMethod) => (
                  <AutocompleteItem
                    key={paymentMethod.id}
                    value={paymentMethod.id}
                  >
                    {paymentMethod.id}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            )}
          </>
        ) : (
          <>
            <Skeleton className="h-10 w-[200px] rounded-lg" />
            <Skeleton className="h-10 w-[200px] rounded-lg" />
          </>
        )}
      </div>
    </div>
  );
};
