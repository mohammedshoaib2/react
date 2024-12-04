import React from "react";
import { useParams } from "react-router-dom";

function NewElement() {
  const { id } = useParams();
  return <div>NewElement and id is {id}</div>;
}

export default NewElement;
