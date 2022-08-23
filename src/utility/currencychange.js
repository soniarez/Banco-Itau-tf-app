export const getFormatCurrency = (amount, currency) => {
  const amountFormat = { CLP: 'es-CL', USD: 'es-US' };
  return Intl.NumberFormat(amountFormat[currency]).format(amount).toString();
};
