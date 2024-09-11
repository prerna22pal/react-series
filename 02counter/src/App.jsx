import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(5)

  //let counter = 10
  const addValue=()=>{
    //console.log("chaiii or" , Math.random())
    if(counter>=20){
      stop
    }
    else{
    counter=counter+1
    setcounter(counter)
    console.log(counter)
    }
    

  }
  const removeValue=()=>{
    //console.log("chaiii or" , Math.random())
    if(counter<=0){
      stop
    }
    else{
      setprerna(counter-1)
      console.log(counter)  
    }
   
  }
  
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addValue}>add value {counter}</button><br/><br/>
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
