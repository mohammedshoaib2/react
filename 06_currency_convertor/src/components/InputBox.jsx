function InputBox({
  label,
  isdisabled = false,
  currency,
  setCurrency,
  amount,
  setAmount,
  options = [],
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          disabled={isdisabled}
          value={isNaN(amount) ? 0 : amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={currency}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          {options?.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
