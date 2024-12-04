import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Contact Page
      <Link to="info">
        <button>INFO</button>
      </Link>
      <Link to="form/yourname">
        <button>Form</button>
      </Link>
    </div>
  );
}

export default Contact;
