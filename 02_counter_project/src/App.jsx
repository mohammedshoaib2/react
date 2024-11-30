import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 20) {
      /* Because of the Fibre algo, React Bundles up all the similar kind of state updates and propogates it as a single state change */
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      //Below here all have different prevCounter values so React propogates each state as a new state change
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
    }
  };

  const decrement = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter - 1);
    }
  };
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
  );
}

export default App;
