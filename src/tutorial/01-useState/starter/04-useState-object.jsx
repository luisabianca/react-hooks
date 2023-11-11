import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Read Books'
  })

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className='btn' onClick={() => setPerson({name: 'John', age: 28, hobby: 'Scream At The Computer'})}>Show John</button>
    </>
  )
};

export default UseStateObject;
