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

export default function Event() {
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


const Love = ({img,title,number}) => {
// attribute, eventHandler
// onClick, onMouseOver
    // const clickHandler = () => {
    //     alert("Love Urself");
    // }
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert("Love Urself");
    }

    const complexExample = (title) => {
        console.log(title);
    }

    return (
        <article className='love_img' onMouseOver={() => {
            console.log(number);
        }}>
            <h2 style={{color:'red'}} onClick={() => console.log(title)}>{title}{number}</h2>
            <Image img={img}/>
            <h4>{subtitle.toUpperCase()}</h4>
            <button type="button" onClick={clickHandler}>Click</button>

            {/* It runs when application run as not when clicked */}
            <button type="button" onClick={complexExample(title)}>Click</button>

            {/* To pass parameter and want to run when it clicked */}
            <button type="button" onClick={() => complexExample(title)}>Click</button>

        </article>
    )
};
const Image = (props) => (
    <img src={props.img}  width='100' height='100'/>
);
