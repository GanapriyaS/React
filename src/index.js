import React from 'react';  // no need of ./ as in node_modules as it is only dependency
import ReactDom from 'react-dom';

import './index.css';
// import Main from './basics/Main';
// import State from './advanced/1-useState'
// import Effect from './advanced/2-useEffect';
// import Condition from './advanced/3-conditional-rendering';
// import Forms from './advanced/4-forms';
// import Ref from './advanced/5-useRef/1-useRef-basics'
// import Reducer from './advanced/6-useReducer';
// import PropDrilling from './advanced/7-prop-drilling';
// import ContextAPI from './advanced/8-useContext';
// import CustomHooks from './advanced/9-custom-hooks';
// import PropType from './advanced/10-prop-types';
// import Routers from './advanced/11-react-router';
import Memo from './advanced/12-memo-useMemo-useCallback';
// import LayoutEffect from './advanced/13-useLayoutEffect';
// import ImperativeHandle from './advanced/14-useImperativeHandle';
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
      {/* <Forms /> */}
      {/* <Ref /> */}
      {/* <Reducer /> */}
      {/* <PropDrilling /> */}
      {/* <ContextAPI /> */}
      {/* <CustomHooks /> */}
      {/* <PropType /> */}
      {/* <Routers /> */}
      <Memo />
      {/* <LayoutEffect /> */}
      {/* <ImperativeHandle /> */}
      
     </div>
    </React.Fragment>
  );
 
}

ReactDom.render(<Greeting />, document.getElementById('root')
);