import React from 'react';

const ErrorExample = () => {
  let title="USE STATE";
  const handleClick =()=>{
    // render not stays live
    title="Hello";
    console.log("Hello");
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
