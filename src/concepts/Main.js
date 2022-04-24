import React from 'react'
import NestedComponents from './Nested_Components';
import Props from './Props';
import SimpleList from './Simple_List';
import ProperList from './Proper_List';
import Event from './Event';
import SpreadOperator from './Spread_Operator';
import Export from './Import_and_Export/Export';
import ImportDefault from './Import_and_Export/Import_Default';

const Main = () => {
  return (
    <div style={{textAlign:'center'}}>
    <h2>Nested_Components</h2>
      <NestedComponents />
      <h2>Props</h2>
      <Props />
      <h2>Simple_List</h2>
      <SimpleList />
      <h2>Proper_List</h2>
      <ProperList />
      <h2>Spread_Operator</h2>
      <SpreadOperator />
      <h2>Events</h2>
      <Event />
      <h2>Export</h2>
      <Export />
      <h2>Import_and_Export</h2>
      <ImportDefault />
    </div>
  )
}

export default Main