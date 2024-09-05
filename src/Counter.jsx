import React, { useState } from "react";
import Button from "./Button";


function Counter() {
  const [value, setValue] = useState(0);
  const [operation, setOperation] = useState(null)

  const handleIncrement = (incrementValue) => {
    const newValue = value + parseInt(incrementValue, 10);
    setValue(newValue);
  };

  const handleDecrement = (decrementValue) => {
    const newValue = value - parseInt(decrementValue, 10);
    setValue(newValue);
  };


  const handleDropdownChange = (event) => {
    setOperation(event.target.value);
  }

  const applyOperation = () => {
    const number = parseInt(document.getElementById("number").value,10)
    if (operation === "multiply") {
      setValue(value * number);
    } else if (operation === "divide") {
      setValue(value / number);
    } else if (operation === "reset") {
      setValue(0);
    }
  }

  return (
    <div>
      <h1>Counter Heaven</h1>
      <div className="board">
        <div id="value" style={{ color: value < 0 ? "red" : "black" }}>
          {value}
        </div>
        <div className="container">
          <Button
            action={() =>
              handleIncrement(document.getElementById("number").value)
            }
            symbol="+"
          />
          <div className="value-form">
            <input type="number" id="number" defaultValue="0" />
          </div>
          <Button
            action={() =>
              handleDecrement(document.getElementById("number").value)
            }
            symbol='-'
          />
        </div>
        <div className="dropdown-container">
        <select onChange={handleDropdownChange} style={{ padding: '10px', fontSize: '16px' }}>
            <option value="">Other Functions!</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
            <option value="reset">Reset</option>
          </select>
          <Button action ={applyOperation} symbol="Apply"/>
        </div>
      </div>
    </div>
  );
}

export default Counter;