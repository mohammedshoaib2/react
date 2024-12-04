import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let userContextData = useContext(UserContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "100px",
      }}
    >
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="password"
      />
      <button
        onClick={(e) => {
          userContextData?.setUser(name);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
