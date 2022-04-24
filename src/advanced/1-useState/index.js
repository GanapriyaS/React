import React from 'react'
import StateError from './1-error-example';
import UseStateBasics from './2-useState-basics';
import UseStateArray from './3-useState-array';
import UseStateObject from './4-useState-object';
import UseStateCounter from './5-useState-counter';

const State = () => {
  return (
    <>
    <br></br>
     <StateError />
     <br></br>
     <br></br><hr></hr>
     <br></br>
     <UseStateBasics />
     <br></br>
     <br></br><hr></hr>
     <br></br>
     <UseStateArray />
     <br></br>
     <br></br><hr></hr>
     <br></br>
     <UseStateObject />
     <br></br>
     <br></br><hr></hr>
     <br></br>
     <UseStateCounter />
     </>
  )
}

export default State