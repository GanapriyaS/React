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

const Love = () => {
    return (
        <article className='love_img'>
            <h2 style={{color:'red'}}>Love</h2>
            <Image />
        </article>
    )
};
const Image = () => (
    <img src={img_love} />
);
