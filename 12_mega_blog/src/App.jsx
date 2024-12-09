import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logIn, logOut } from "../store/authSlice";
import authService from "./appwrite/AurhService";
import conf from "./conf/conf";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log(userData);

        if (userData) {
          dispatch(logIn(userData));
          setLoading(false);
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div>
      <div>
        <Header />
        TODO: <Outlet />
        <Footer />
      </div>
    </div>
  ) : (
    <>Loading</>
  );
}

export default App;
