import { useState } from 'react';
import { data } from '../../../data'

const UseStateArray = () => {

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} className='remove-only'>remove</button>
          </div>
        )
      })}
      <button 
      className='btn'
      style={{ marginTop: '2rem' }}
      onClick={() => setPeople([])}
      >
        Remove all
      </button>
    </>
  )
};

export default UseStateArray;
