import { useState } from "react";

const UseStateGotcha = () => {

  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentState) => { 
      const newState = currentState + 1
      console.log(newState);
      return newState;
    });
  }

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>Increase</button>
    </>
  )
};

export default UseStateGotcha;
