import React from "react";
import { useSelector } from "react-redux";
import { LoginButton, SignupButton } from "../index";

function HomeScreen() {
  const authStatus = useSelector((state) => state.auth.status);
  return !authStatus ? (
    <div
      style={{ height: "80vh" }}
      className=" flex justify-center items-center w-full   text-4xl"
    >
      <div className=" flex flex-col gap-10 justify-center items-center h-2/4 w-3/4 bg-gray-100 shadow shadow-slate-400 rounded-lg">
        <h2>Please Login/Signup to view posts</h2>

        <div className="flex gap-4">
          <SignupButton className="text-lg">Signup</SignupButton>/
          <LoginButton className="text-lg">Login</LoginButton>
        </div>
      </div>
    </div>
  ) : (
    <div>HomeScreen</div>
  );
}

export default HomeScreen;
