import  { useState } from 'react'
import './App.css'

function App() {
 let [counter,setCounter] = useState(0)

 const increment = ()=>{
  if(counter < 20){
  counter = counter + 1
  setCounter(counter)
  }
}

const decrement = ()=>{

 if(counter > 0){
  counter = counter - 1;
  setCounter(counter)
 }

}
  return (
    <>
    <h1>Counter App</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={increment}>Increase value</button>
    <br />
    <br />
    <button onClick={decrement}>Decrease value</button>
    <p>footer : {counter}</p>

    </>
  )
}

export default App
