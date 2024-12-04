import React from "react";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  );
}

export default ContactLayout;
