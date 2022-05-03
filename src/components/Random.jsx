import React from "react"; 

const Random = (props) =>{
    let randomNumber = (Math.floor(Math.random()* (props.max-props.min+1)+props.min))

    return (
        <div className="card">
            <p>Random value between {props.min} and {props.max}: {randomNumber} </p>
        </div>
    )


}


export default Random; 