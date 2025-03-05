import React, { useRef } from 'react'

const CounterRef = () => {
  const cliques = useRef(0);

  const handleClick = () => {
    cliques.current += 1;
    console.log(cliques)
  }

  return (
    <>
      <h1>Counter Ref</h1>
      <button onClick={handleClick}>Clique</button>
      <p>o red está em {cliques.current}</p>
    </>
  )
}

export default CounterRef;