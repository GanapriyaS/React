import React from 'react'

import {love} from './Love'

export default function Export() {
    return (
        <div className='love' >
            {
                love.map((lov)=> {
                    const {id,img,title,number} = lov;
                    return (
                        <Love key={id} img={img} number={number} title={title}></Love>
                    );
                })
            }
        </div>
    )
}

const subtitle='Love Urself';
// const Love = (props) => {
//     const {img,title,number} = props;
//     return (
//         <article className='love_img'>
//             <h2 style={{color:'red'}}>{props.title}{number}</h2>
//             <Image img={props.img}/>
//             <h4>{subtitle.toUpperCase()}</h4>
//         </article>
//     )
// };


const Love = ({img,title,number,children}) => {
    return (
        <article className='love_img'>
            <h2 style={{color:'red'}}>{title}{number}</h2>
            <Image img={img}/>
            <h4>{subtitle.toUpperCase()}</h4>
            {children}
        </article>
    )
};
const Image = (props) => (
    <img src={props.img} />
);
