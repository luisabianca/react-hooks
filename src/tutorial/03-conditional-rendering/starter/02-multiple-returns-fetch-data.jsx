import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  },[])

  const { avatar_url, name, company, bio } = user;
  return (
    <>
      {isLoading ?
        <h2>Loading...</h2>
        :
        <div>
          <img 
          style={{ width: '150px', borderRadius: '25px' }}
          src={avatar_url} 
          alt={name} />
          <h2>{name}</h2>
          <h4>Works At {company}</h4>
          <p>{bio}</p>
        </div>
      }
    </>
  );
};
export default MultipleReturnsFetchData;
