import React from 'react'
import img_love from '../static/img/love.jpeg'
import img_love1 from '../static/img/love1.jpeg'


const love =[ {
    id:1,
    title: 'Love ',
    number: '831',
    img: img_love
},
{   
    id:2,
    title: 'Pyaar ',
    number: '143',
    img: img_love1
},
]

export default function Proper_List() {
    return (
        <div className='love' >
            {
                // using index can change but id will not change
                // love.map((lov)=> {
                //     return (
                //         <Love key={lov.id} love={lov}></Love>
                //     );
                // })
                love.map((lov,index)=> {
                    // const {img,title,number} = lov;
                    return (
                        <Love key={index} love={lov}></Love>
                    );
                })
            }
        </div>
    )
}

const subtitle='Love Urself';



const Love = (props) => {
     const {img,title,number} = props.love;
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
