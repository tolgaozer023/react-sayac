import React, { useState } from 'react'
import "./sayacScript.css"

function SayacScript() {
 
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  
  const handleChange = (event) => {
    const {value}= event.target
    setInputValue(parseInt(value))
  }

  const increase = () => {
    let artisMiktari = 1
    if(inputValue){
      artisMiktari = inputValue
    }
    setCounter(counter+artisMiktari)
  }

  const decrease = () => {
    let azalisMiktari = 1
    if(inputValue){
      azalisMiktari = inputValue
    }
    setCounter(counter-azalisMiktari)
  }

  return (
    <>
      <button className="counter-button" onClick={increase}>
        +
      </button>
      <span className="counter">
        {counter}
      </span>
      <button className="counter-button" onClick={decrease}>
        -
      </button>

      <label>Sayı giriniz:
        <input value={inputValue ? inputValue : 0} onChange={handleChange}
        />
      </label>
    </>
  );
}

export default SayacScript