import { useState } from "react";

const ErrorExample = () => {

  const [ count, setCount ] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </>
  )

};

export default ErrorExample;
