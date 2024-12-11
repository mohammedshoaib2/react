import React from "react";

function SelectOptions({ options = [] }, ref) {
  return (
    <div
      className="w-full  inline-block bg-white py-3 px-6 rounded-lg
             text-gray-900 outline-none  border-gray-300 border-2
              placeholder:text-gray-500"
    >
      <select ref={ref} className="w-full outline-none">
        {options.map((option) => {
          return (
            <option key={option} value="active">
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default React.forwardRef(SelectOptions);
