import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigateToHome = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      404 | Page not found
      <button
        onClick={() => {
          console.log("Click");

          navigateToHome("about");
        }}
        style={{
          padding: "15px 30px",
          border: "none",
          borderRadius: "50px",
          backgroundColor: "black",
          outline: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        Go to home page
      </button>
    </div>
  );
}

export default PageNotFound;
