import React from 'react';
import ReactDom from 'react-dom';
import Nested_Components from './concepts/Nested_Components';
import './index.css';

// JSX rules
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting



// stateless functional component, always return JSX
// function Greeting() {
//   return <h4>This is GanapriyaS</h4>
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
      <h4 style={{letterSpacing:'5px'}}>Hello .... Everyone !</h4>
      <Nested_Components />
    </React.Fragment>
  );
 
}

ReactDom.render(<Greeting />, document.getElementById('root')
);