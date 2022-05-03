import React from "react"; 

const IdCard = (props) =>{

    return (

      <div className='card'>
          <div>
              <img src={props.image} alt="image"/>
          </div>
     
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName} </p>
            <p>Gender: {props.gender} </p>
            <p>Height: {props.height} </p>
            <p>Birth: {props.date}</p>
            <p> {props.date}</p>
        </div>

     </div>  

    )

}

export default IdCard