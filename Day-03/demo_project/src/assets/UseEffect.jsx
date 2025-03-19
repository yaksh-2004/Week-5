import React, { useState, useEffect } from 'react';

export function UseEffect() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
     <h1>
     USER DATA:
    </h1>
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </>
   
  );
}

export default UseEffect;