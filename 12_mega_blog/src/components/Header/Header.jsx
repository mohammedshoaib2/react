import React from "react";
import { LoginButton, SignupButton, LogoutButton } from "../index";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "All Posts",
      url: "/all-posts",
    },
    {
      name: "My Posts",
      url: "/my-posts",
    },
    {
      name: "Add Post",
      url: "/add-post",
    },
  ];
  return (
    <header className="shadow-md bg-slate-50">
      <nav className="bg-white py-2 px-8 mb-5 flex justify-between items-center ">
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ff6f00"
            d="M37,42H11c-2.761,0-5-2.239-5-5V11c0-2.761,2.239-5,5-5h26c2.761,0,5,2.239,5,5v26 C42,39.761,39.761,42,37,42z"
          ></path>
          <path
            fill="#fff"
            d="M33.5,22h-1c-0.828,0-1.5-0.672-1.5-1.5V20c0-3.866-3.134-7-7-7h-4c-3.866,0-7,3.134-7,7v8 c0,3.866,3.134,7,7,7h8c3.866,0,7-3.134,7-7v-4.5C35,22.672,34.328,22,33.5,22z M20,19h5c0.553,0,1,0.448,1,1s-0.447,1-1,1h-5 c-0.553,0-1-0.448-1-1S19.447,19,20,19z M28,29h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S28.553,29,28,29z"
          ></path>
        </svg>

        <ul className="flex  gap-10">
          {navItems.map((item) => {
            return (
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-red-600" : "";
                }}
                to={item.url}
                key={item.name}
              >
                <li> {item.name}</li>
              </NavLink>
            );
          })}
        </ul>

        {authStatus ? (
          <LogoutButton />
        ) : (
          <div className="flex gap-4">
            <LoginButton>Login</LoginButton>
            <SignupButton>Signup</SignupButton>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
