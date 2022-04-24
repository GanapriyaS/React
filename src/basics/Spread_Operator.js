import React from 'react'

import {love} from './Import_and_Export/Love'


export default function Spread_Operator() {
    return (
        <div className='love' >
            {
                love.map((lov,index)=> {
                    return (
                        // not passing love property as object but passing as separate properties, spread all properties out comming , no need of props.love in <Love /> as previos in properlist
                        <Love key={index} {...lov}></Love>
                    );
                })
            }
        </div>
    )
}

const subtitle='Love Urself';


// const Love = ({img,title,number}) => {
const Love = (props) => {
     const {img,title,number} = props;
    return (
        <article className='love_img'>
            <h2 style={{color:'red'}}>{title}{number}</h2>
            <Image img={img}/>
            <h4>{subtitle.toUpperCase()}</h4>
        </article>
    )
};
const Image = (props) => (
    <img src={props.img} alt=" "  width='100' height='100'/>
);
