import React from 'react'
import img_love from '../static/img/love.jpeg'
import img_love1 from '../static/img/love1.jpeg'


const love =[ {
    id:1,
    title: 'Prem ',
    number: '831',
    img: img_love
},
{   
    id:2,
    title: 'Isk ',
    number: '143',
    img: img_love1
},
]

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
    <img src={props.img} />
);
