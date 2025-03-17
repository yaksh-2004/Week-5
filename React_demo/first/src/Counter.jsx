import React, { useState } from "react";

function Counter() {
  // Set the initial count state to zero
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div style={{textAlign:"center" }}>
        <button onClick={handleDecrement}>-</button>
        <h5 >Count is {count}</h5>
        <button onClick={handleIncrement}>+</button><br /><br />
        <div>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
export default Counter;