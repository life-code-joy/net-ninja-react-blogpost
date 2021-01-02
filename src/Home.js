import {useState} from 'react';

const Home = () => {
    const [name, setName] =  useState('larry stoneholdings');
    const [age, setAge] =  useState(122);


  const handleClick = () => {
    setName('Frank Valley');
    setAge(30);
  };

  
  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{name} is {age} years old.</p>
      <button onClick={handleClick}>Click Me</button>
      
    </div>
  );
};

export default Home;
