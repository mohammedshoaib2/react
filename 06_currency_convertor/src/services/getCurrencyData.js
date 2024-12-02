async function getCurrencyData(currency, setState, setOptions) {
  const API_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  let response = await fetch(API_URL);
  let currencyData = await response.json();

  setOptions(Object.keys(currencyData[currency]));
  setState(currencyData);
}

export { getCurrencyData };
