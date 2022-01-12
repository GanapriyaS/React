import React from 'react';
import ReactDom from 'react-dom';
import Nested_Components from './concepts/Nested_Components';
import Props from './concepts/Props';
import Simple_List from './concepts/Simple_List';
import Proper_List from './concepts/Proper_List';
import Event from './concepts/Event';
import Export from './concepts/Import_and_Export/Export';
import Import_Default from './concepts/Import_and_Export/Import_Default';
import './index.css';
import {greeting} from './concepts/Import_and_Export/Greeting';

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
      <h4 style={{letterSpacing:'5px'}}>{greeting}</h4>
      <Nested_Components />
      <Props />
      <Simple_List />
      <Proper_List />
      <Event />
      <Export />
      <Import_Default />
    </React.Fragment>
  );
 
}

ReactDom.render(<Greeting />, document.getElementById('root')
);