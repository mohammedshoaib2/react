import React from "react";

function InputComponent(
  { className = "", title, type = "text", ...props },
  ref
) {
  return (
    <div className="">
      <input
        ref={ref}
        type={type}
        className={`inline-block bg-white py-3 px-6 rounded-lg
             text-gray-900 outline-none w-full border-gray-500 border-2
              placeholder:text-gray-800 ${className}`}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(InputComponent);
