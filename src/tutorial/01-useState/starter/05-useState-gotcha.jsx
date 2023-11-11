import { useState } from "react";

const UseStateGotcha = () => {

  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked the button')
      setValue((currentState) => { 
        const newState = currentState + 1
        console.log(newState);
        return newState;
      });
    }, 3000)
  }

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>Increase</button>
    </>
  )
};

export default UseStateGotcha;
