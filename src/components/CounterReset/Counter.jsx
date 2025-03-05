import { useEffect, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const resetCount = () => {
    setCount(0);
  }
  
  useEffect(() => {
    console.log(count);
  }, [count])

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>increment</button>
      <button onClick={resetCount}>reset</button>
    </>
  )
}

export default Counter;