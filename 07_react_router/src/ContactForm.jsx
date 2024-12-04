import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ContactForm() {
  const { name } = useParams();

  let [nameData, setNameData] = useState(name);
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          onChange={(e) => {
            setNameData(e.target.value);
          }}
          value={nameData}
          type="text"
          placeholder="Name"
        />
        <input type="email" placeholder="email" />
        <input type="number" placeholder="phone" />
        <textarea placeholder="message"></textarea>
      </form>
    </div>
  );
}

export default ContactForm;
