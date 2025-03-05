import React, { useRef } from 'react'

const InputRef = () => {

  const focusInput = useRef(null);

  const handleClick = () => {
    focusInput.current.focus();
  }

  return (
    <>
      <h1>Input Ref</h1>
      <input type="text" ref={focusInput}/>
      <button onClick={handleClick}>Focus input</button>
    </>
  )
}

export default InputRef;