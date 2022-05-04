import React from "react"; 
import Rating from "./Rating"; 

const DriverCard = (props) => {


    return (

        <div className="card">
            <img src={props.img} alt="driver-img" height="100" width="100"/> 
            <h3>{props.name}</h3>
            <Rating>{props.rating}</Rating>

            <p>{props.car.model} - {props.car.licensePlate}</p>

        </div>
    )
}

export default DriverCard; 
