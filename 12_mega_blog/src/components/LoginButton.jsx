import React from "react";
import { useNavigate } from "react-router-dom";

function LoginButton({ children, className = "", ...props }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/login");
      }}
      className={`px-4 py-2 bg-blue-600 rounded-lg text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default LoginButton;
