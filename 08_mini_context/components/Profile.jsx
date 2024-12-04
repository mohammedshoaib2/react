import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  let UserContextData = useContext(UserContext);
  return <div>User name is : {UserContextData.user}</div>;
}

export default Profile;
