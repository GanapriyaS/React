import React from 'react'

// same name should be there
import {love} from './Love'

// different name can work in default
import Default from './Default'

export default function Import_Default() {
    return (
        <div className='love' >
            {
                love.map((lov)=> {
                    const {id,img,title,number} = lov;
                    return (
                        <Default key={id} img={img} number={number} title={title}></Default>
                    );
                })
            }
        </div>
    )
}


