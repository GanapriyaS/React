import React, { useState } from 'react';

const UseStateObject = () => {
  const [data, setData] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = ()=>{
    // setData({message: 'hello world' });
    // it will disply only updated value and not all data so use spread operator

    setData({ ...data, message: 'hello world' });
  };
  
  return (
  <>
  <h3>{data.name}</h3>
      <h3>{data.age}</h3>
      <h4>{data.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
  </>

  );
  
};

export default UseStateObject;
