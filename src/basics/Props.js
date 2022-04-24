import React from 'react'
import img_love from '../static/img/love.jpeg'

const love = {
    title: 'Love ',
    number: '831',
    img: img_love
}

export default function Props() {
    return (
        <div className='love' >
            <Love title='Pyaar'/>
            <Love title={love.title} number={love.number} img={love.img} />
            <Love title='Kadhal ' number={141+2} >
                <h4>Happy Life</h4>
            </Love>
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
    <img src={props.img} alt=" "  width='100' height='100' />
);
