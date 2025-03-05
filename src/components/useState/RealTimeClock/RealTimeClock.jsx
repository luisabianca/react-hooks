import React, { useEffect, useState } from 'react'

const RealTimeClock = () => {
  const [ realTime, setRealTime ] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTime(new Date().toLocaleTimeString());
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <h1>Real Time Clock</h1>
      <h2>{realTime}</h2>
    </>
  )
}

export default RealTimeClock;