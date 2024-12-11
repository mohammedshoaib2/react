import React from "react";
import { useNavigate } from "react-router-dom";

function SignupButton({ children, className = "", ...props }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/signup")}
      className={`px-4 py-2 bg-indigo-950 rounded-lg text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default SignupButton;
