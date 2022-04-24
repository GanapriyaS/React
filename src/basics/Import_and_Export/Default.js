import React from 'react'

const subtitle='Love Urself';
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
    <img src={props.img} alt=""  width='100' height='100'/>
);

// can have many exports but only one default
export default Love