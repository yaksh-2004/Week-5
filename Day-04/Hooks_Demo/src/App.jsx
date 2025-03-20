
import { useState } from 'react'
import TodoList from './TodoList'
import ArrayComponent from './ArrayComponent'
//import StorageComponent from './StorageComponent'
//import DarkModeComponent from './DarkModeComponent'
// import CreateFormhook from './CreateFormhook'
// import { MyFormInput } from './MyFormInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TodoList/> */}
    <ArrayComponent/>
     {/* <CreateFormhook/> */}
     {/* <DarkModeComponent/> */}
     {/* <StorageComponent/> */}
    
    </>
  )
}

export default App
