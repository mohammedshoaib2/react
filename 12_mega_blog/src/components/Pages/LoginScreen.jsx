import React from "react";
import { LoginForm } from "../index";

function LoginScreen() {
  return (
    <div
      style={{ height: "80vh" }}
      className="flex justify-center items-center"
    >
      <LoginForm />
    </div>
  );
}

export default LoginScreen;
