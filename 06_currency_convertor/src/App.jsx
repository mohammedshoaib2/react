import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import { getCurrencyData } from "./services/getCurrencyData";

function App() {
  let [fromCurrency, setFromCurrency] = useState("usd");
  let [toCurrency, setToCurrency] = useState("inr");
  let [amount, setAmount] = useState(1);
  let [data, setData] = useState({});
  let [options, setOptions] = useState([]);
  let [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    getCurrencyData(fromCurrency, setData, setOptions);
  }, [fromCurrency]);

  function onSwap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function convertAmount() {
    setConvertedAmount(amount * Number(data[fromCurrency][toCurrency]));
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-gray-950">
      <div className="w-full ">
        <div className="flex flex-col justify-center align-middle gap-10 w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className="text-white text-lg">Currency Convertor</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                setCurrency={setFromCurrency}
                currency={fromCurrency}
                amount={amount}
                setAmount={setAmount}
                options={options.length > 0 ? options : []}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={onSwap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                setCurrency={setToCurrency}
                currency={toCurrency}
                isdisabled={true}
                options={options.length > 0 ? options : []}
                amount={convertedAmount}
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                convertAmount();
              }}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromCurrency} to {toCurrency}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
