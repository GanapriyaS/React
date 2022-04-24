import React from 'react';
import { data } from '../data/data';

const UseStateArray = () => {
  //  default useState([])
  const [arr,setArr] = React.useState(data);

  console.log(arr);

  const removeItem = (id) => {
    // let newArr = arr.filter((arr) => arr.id !== id);
    // setArr(newArr);
// any way works
    setArr((arr)=> {
      let newArr = arr.filter((arr) => arr.id !== id);
      return newArr;
    });
  };

  return (
    <>
    {arr.map((a) => {
        const { id, name } = a;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setArr([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
