import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

// useState is a function - boolean , value, string, func , array and boolean etc
const UseStateBasics = () => {
  // console.log(useState("Hi"));
  // const value= useState("Hello")[0];
  // const handler = useState("Hello")[1];
  // console.log(value,handler);

  const[text,setText] = useState("Hi This is Priya");

  const handleClick =()=>{
    if(text==="Hi This is Priya")
    setText("Hello World");
    else
    setText("Hi This is Priya");
  }

  return (
<>
<h2>useState basic example</h2>;
<h2>{text}</h2>
<button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
</>
  );
 
};

export default UseStateBasics;
