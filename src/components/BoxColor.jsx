import React from "react"; 

const BoxColor = (props) => {
    return (
        <div className='box' style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
            <p>{props.r} {props.g} {props.b}</p>
        </div>
    )
}

export default BoxColor; 