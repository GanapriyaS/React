import React, { useState, useEffect } from 'react';
// by default runs after every re-render  -   useEffect callback function
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    // useEffect - Conditional
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });
// }, [value]);

// intially run like dowhile, if no dependency list useeffect runs every rerender , or else run when dependency list changes
//  we can have as many useeffects

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;