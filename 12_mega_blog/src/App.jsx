import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(false);

  return loader ? (
    <div>Loading.....</div>
  ) : (
    <>
      <Outlet />
    </>
  );
}

export default App;
