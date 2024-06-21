import React, { useState } from "react";
import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";

export const QuesAndAns = ({ question, answer, icon }) => {
  const [connect, setConnect] = useState(icon);
  console.log(icon);
  return (
    <li>
      <div
        className="titleandicon"
        onClick={() => setConnect((connect) => !connect)}
      >
        <h2>{question}</h2>
        <img src={connect ? iconPlus : iconMinus} alt="Icon" />
      </div>
      <p className={`${connect ? "closed" : "open"}`}>{answer}</p>
    </li>
  );
};
