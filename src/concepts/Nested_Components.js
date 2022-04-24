import React from 'react'
import img_love from '../static/img/love.jpeg'

export default function Nested_Components() {
    return (
        <div className='love'>
            <Love />
            <Love />
            <Love />
        </div>
    )
}

const subtitle='Love Urself';
const Love = () => {
    const title='Love  ';
    return (
        <article className='love_img'>
            <h2 style={{color:'red'}}>{title}{141+2}</h2>
            <Image />
            <h4>{subtitle.toUpperCase()}</h4>
        </article>
    )
};
const Image = () => (
    <img src={img_love} alt=""  width='100' height='100'/>
);
