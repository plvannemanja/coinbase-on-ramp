import { Chip, Skeleton } from '@nextui-org/react';
import { useCallback, useMemo } from 'react';
import { useCoinbaseRampTransaction } from '../contexts/CoinbaseRampTransactionContext';
import { formatCurrency, getCurrencySymbol } from '../utils/currency';

export const AmountInput = () => {
  const {
    rampTransaction,
    setRampTransaction,
    selectedPaymentMethod,
    loadingBuyOptions,
    selectedCurrency,
  } = useCoinbaseRampTransaction();

  const inputError = useMemo(() => {
    if (rampTransaction?.amount && selectedPaymentMethod) {
      return Number(rampTransaction.amount) < Number(selectedPaymentMethod.min);
    }

    return false;
  }, [rampTransaction?.amount, selectedPaymentMethod]);

  const handleAmountChange = useCallback(
    (value: string) => {
      let formattedValue = value.includes('.')
        ? value.substring(0, value.indexOf('.'))
        : value;
      formattedValue = formattedValue.startsWith('0')
        ? formattedValue.substring(1)
        : formattedValue;

      if (Number(formattedValue) > Number(selectedPaymentMethod?.max)) {
        setRampTransaction({
          ...rampTransaction,
          amount: selectedPaymentMethod?.max,
        });
      } else {
        setRampTransaction({
          ...rampTransaction,
          amount: formattedValue,
        });
      }
    },
    [rampTransaction, setRampTransaction, selectedPaymentMethod]
  );

  return (
    <div className="amount-input h-full flex items-center flex-col justify-between mb-8">
      {!loadingBuyOptions ? (
        <>
          <div className="grow">
            <div className="flex flex-col justify-center w-full h-full gap-4">
              <div className="text-5xl flex items-center m-auto">
                <div className="flex items-center justify-center">
                  <input
                    value={`${getCurrencySymbol(selectedCurrency?.id)}${rampTransaction?.amount || '0'}`}
                    type="text"
                    pattern="[0-9]*"
                    onChange={(e) =>
                      handleAmountChange(
                        e.target.value.replace(
                          getCurrencySymbol(selectedCurrency?.id),
                          ''
                        )
                      )
                    }
                    className="text-center max-w-[300px] bg-transparent pl-4 pr-4 outline-none border-none"
                    style={{
                      WebkitAppearance: 'none',
                      MozAppearance: 'textfield',
                    }}
                  />
                </div>
              </div>
              {inputError && (
                <div className="mx-auto mb-4 text-red-600 text-xs">
                  Amount must be greater than minimum
                </div>
              )}
              <div className="flex mx-auto mb-4 w-[250px] justify-around">
                <span>
                  Min:{' '}
                  {formatCurrency(
                    selectedPaymentMethod?.min || '0',
                    getCurrencySymbol(selectedCurrency?.id)
                  )}
                </span>
                <span>
                  Max:{' '}
                  {formatCurrency(
                    selectedPaymentMethod?.max || '0',
                    getCurrencySymbol(selectedCurrency?.id)
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex h-[50px] gap-4">
            {selectedCurrency?.id.toUpperCase() === 'USD' &&
              ['10', '25', '50'].map((amount) => (
                <Chip
                  key={amount}
                  onClick={() => handleAmountChange(amount)}
                  className="px-2  text-sm bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  ${amount}
                </Chip>
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="grow">
            <Skeleton className="w-full h-16 rounded-lg" />
          </div>
          <div className="flex h-[50px] gap-4">
            {[0, 1, 2, 3, 4].map((index) => (
              <Skeleton key={index} className="w-16 h-8 rounded-md" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
