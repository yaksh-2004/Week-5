import React, { useContext } from 'react'
import { Context } from './App';

const MyContext = () => {
  const myname=useContext(Context);
  return (
    <div>
      {myname}
    </div>
  )
}

export default MyContext