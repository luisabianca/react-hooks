import React, { useEffect, useState } from 'react'

const CounterDelay = () => {
  const [ counter, setCounter ] = useState(0);
  const [ isUpdating, setIsUpdating ] = useState(false);

  const handleClick = () => {
    console.log("Atualizando contador...")
    setIsUpdating(true);

    setTimeout(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000)
  }

  useEffect(() => {
    if (isUpdating) {
      console.log("Contador atualizado!");
      setIsUpdating(false);
    }
  }, [counter]);

  return (
    <>
      <h1>Counter with delay</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>increment</button>
    </>
  )
}

export default CounterDelay