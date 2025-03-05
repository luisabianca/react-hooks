import React, { useEffect, useState } from 'react'

const CounterPause = () => {
  const [ isRunning, setIsRunning ] = useState(true);
  const [ counter, setCounter ] = useState(0);

  const resumeTime = () => {
    setIsRunning(true);
  }

  const pauseTime = () => {
    setIsRunning(false)
  }

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCounter(prevCounter => prevCounter +1)
      }, 1000)

      return () => clearInterval(interval);
    } 
  }, [isRunning])

  return (
    <>
      <h1>Conter Pause</h1>
      <h2>{counter}</h2>
      <button onClick={resumeTime}>resume</button>
      <button onClick={pauseTime}>pause</button>
    </>
  )
}

export default CounterPause;  