import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/AuthService";
import { logIn } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/index";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const disPatch = useDispatch();

  useEffect(() => {
    try {
      const userData = authService.getCurrentUser();
      userData
        .then((response) => {
          if (response) {
            disPatch(logIn({ userData: response }));
            setLoader(false);
          } else {
          }
        })
        .finally(() => {
          setLoader(false);
        });
    } catch (error) {
      setError(error.messgae.toString());
    }
  }, []);

  return loader ? (
    <div className="h-screen w-screen flex items-center justify-center">
      <RotatingLines
        visible={true}
        strokeColor="orange"
        height="50"
        width="50"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  ) : (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
