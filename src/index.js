import React from 'react';  // no need of ./ as in node_modules as it is only dependency
import ReactDom from 'react-dom';

import './index.css';
// import Main from './basics/Main';
// import State from './advanced/1-useState/state'
// import Effect from './advanced/2-useEffect/effect';
// import Condition from './advanced/3-conditional-rendering/condition';
import Forms from './advanced/4-forms/forms'
// name of object should match exactly
import {greeting} from './basics/Import_and_Export/Greeting';





// stateless functional component, always return JSX
// function Greeting() {
//   return <h4>This is My first component</h4>
// }

// const Greeting = () => {
//   return React.createElement('h1',{},"Hello");
// };

// function Greeting() {
//   return (
//     <div>
//       <h4>This is GanapriyaS</h4>
//     </div>
//   );
 
// }

// const Greeting = () => {
//   return React.createElement('div',{},
//   React.createElement('h1',{}, 'hello world')
//   );
// };

function Greeting() {
  return (
    // <></>
    <React.Fragment>
      <div className='container'>

      <h4 style={{letterSpacing:'5px'}}>{greeting}</h4>

      {/* <Main /> */}
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Condition /> */}
      <Forms />
     </div>
    </React.Fragment>
  );
 
}

ReactDom.render(<Greeting />, document.getElementById('root')
);