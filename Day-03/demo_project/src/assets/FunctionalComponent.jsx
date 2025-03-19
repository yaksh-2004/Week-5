import React, { useState } from 'react';

export function FunctionalComponent() {
  const [message, setMessage] = useState("Yet to Learn React!!");

  const changeMessage = () => {
    setMessage("Started Learning!!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1> 
      <button 
        onClick={changeMessage} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#4CAF50", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer"
        }}
      >
        BADLAV HOGA
      </button>
    </div>
  );
}

export default FunctionalComponent;
