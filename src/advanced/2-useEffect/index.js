import React from 'react'

import UseEffectBasics from './1-useEffect-basics';
import UseEffectCleanup from './2-useEffect-cleanup';
import UseEffectFetchData from './3-useEffect-fetch-data';

const Effect = () => {
  return (
    <>
    <br></br>
     <UseEffectBasics />
     <br></br>
     <br></br><hr></hr>
     <br></br>
     <UseEffectCleanup />
     <br></br>
     <br></br><hr></hr>
     <br></br>
     <UseEffectFetchData />
     
     </>
  )
}

export default Effect