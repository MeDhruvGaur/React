import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : "Dhruv",
    age : 23
  }
  let newArr = [1, 2, 3];

  return (
    <>
     <h1 className='bg-green-400'>Tailwind Test</h1>
     <Card username = "Chai aur code" someObj = {myObj} newArray = {newArr}/>
     <Card username = "Dhruv" />
   </>
  )
}

export default App;
