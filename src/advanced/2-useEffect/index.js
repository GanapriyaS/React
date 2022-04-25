import React from 'react'

import UseEffectBasics from './1-useEffect-basics';
import UseEffectCleanup from './2-useEffect-cleanup';
import UseEffectFetchData from './3-useEffect-fetch-data';
import UseEffectAxios from './4-useEffect-axios';

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
     <br></br>
     <br></br><hr></hr>
     <br></br>
     <UseEffectAxios />
     </>
  )
}

export default Effect