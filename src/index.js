import React from 'react';  // no need of ./ as in node_modules as it is only dependency
import ReactDom from 'react-dom';

import './index.css';
import Main from './concepts/Main'
// name of object should match exactly
import {greeting} from './concepts/Import_and_Export/Greeting';






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
      <h4 style={{letterSpacing:'5px'}}>{greeting}</h4>

      <Main />
     
    </React.Fragment>
  );
 
}

ReactDom.render(<Greeting />, document.getElementById('root')
);