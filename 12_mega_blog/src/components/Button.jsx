import React from "react";

function Button({ type = "submit", children, className = "", ...props }) {
  return (
    <button
      type={type}
      style={{ backgroundColor: "#FEC887" }}
      className={`py-3 px-4 w-full rounded-lg text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
