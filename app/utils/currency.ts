export const getCurrencySymbol = (currency: string = 'USD') => {
  return (0)
    .toLocaleString('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();
};

export const formatCurrency = (
  amount: string,
  currencySymbol = '$',
  decimals = 2,
  spaceBetweenSymbolAndValue = false
) => {
  const number = parseFloat(amount);

  if (isNaN(number)) {
    return '';
  }

  const formattedAmount = number.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return `${currencySymbol}${spaceBetweenSymbolAndValue ? ' ' : ''}${formattedAmount}`;
};
