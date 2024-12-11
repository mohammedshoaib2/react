import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Button({
  type = "submit",
  children,
  className = "",
  loader = false,
  ...props
}) {
  return (
    <button
      type={type}
      style={{ backgroundColor: "#FEC887" }}
      className={`flex items-center justify-center py-3 px-4 w-full rounded-lg text-gray-900 ${className}`}
      {...props}
    >
      {!loader && children}
      {loader && (
        <RotatingLines
          strokeColor="white"
          visible={true}
          height="28"
          width="28"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      )}
    </button>
  );
}

export default Button;
