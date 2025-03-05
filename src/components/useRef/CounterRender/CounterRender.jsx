import React, { useRef, useState } from 'react'

const CounterRender = () => {
  const [counter, setCounter] = useState(0);
  const renderCount = useRef(1);

  renderCount.current += 1;

  const handleClick = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <>
      <h1>Counter Render</h1>
      <h2>{counter}</h2>  
      <button onClick={handleClick}>Forçar Render</button>
      <p>O componente renderizou {renderCount.current} vezes</p>
    </>
  );
};

export default CounterRender;
