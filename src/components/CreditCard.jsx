import React from "react"; 

const CreditCard = (props) => {


    return (
        <div className="credit-card" style={{backgroundColor: `${props.bgColor}`}}>
            <div className="credit-card-section1">
            <p>{props.type}</p>
            </div>

            <div className="credit-card-section2">
            <p>{props.number}</p>
            </div>

            <div className="credit-card-section3">
            <p>{props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            </div>
            
            <div className="credit-card-section4">
            <p>{props.owner}</p>
            </div>
        </div>


    ); 
}

export default CreditCard; 