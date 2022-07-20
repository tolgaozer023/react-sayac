import React, { useState } from "react";
import "./sayacScript.css";

function SayacScript() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(parseInt(value));
  };

  const increase = () => {
    let artisMiktari = 1;
    if (inputValue) {
      artisMiktari = inputValue;
    }
    setCounter(counter + artisMiktari);
  };

  const decrease = () => {
    let azalisMiktari = 1;
    if (inputValue) {
      azalisMiktari = inputValue;
    }
    setCounter(counter - azalisMiktari);
  };

  return (
    <div className="container">
      <div className="sonuc">
        <span className="counter">{counter}</span>
      </div>
      <div className="butonlar">
        <button className="counter-button" onClick={increase}>
          +
        </button>
        <button className="counter-button" onClick={decrease}>
          -
        </button>
      </div>
      <div className="input-alani">
        <input placeholder="Sayı Giriniz" onChange={handleChange} />
      </div>
    </div>
  );
}

export default SayacScript;
