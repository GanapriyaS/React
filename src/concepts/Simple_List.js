import React from 'react'
import img_love from '../static/img/love.jpeg'
import img_love1 from '../static/img/love1.jpeg'


const love =[ {
    title: 'Love ',
    number: '831',
    img: img_love
},
{
    title: 'Pyaar ',
    number: '143',
    img: img_love1
},
]

export default function Simple_List() {
    return (
        <div className='love' >
            {
                love.map((lov)=> {
                    const {img,title,number} = lov;
                    return (
                        <Love img={img} number={number} title={title}></Love>
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
