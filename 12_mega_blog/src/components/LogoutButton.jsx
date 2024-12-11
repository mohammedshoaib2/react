import React from "react";
import authService from "../appwrite/AuthService";
import { logOut } from "../../features/authSlice";
import { useDispatch } from "react-redux";
function LogoutButton({ className = "", type = "submit", ...props }) {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      await authService.logOut();
      dispatch(logOut());
    } catch (error) {}
  };
  return (
    <button
      type={type}
      onClick={logoutHandler}
      className="px-4 py-2 bg-blue-600 rounded-lg text-white"
      {...props}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
