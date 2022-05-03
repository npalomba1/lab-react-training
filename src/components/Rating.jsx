import React from "react"; 

const Rating = (props) => {
    let rating = props.children; 
    let stars; 

    if(rating < 1){
        stars = {☆☆☆☆☆}
    } else if (rating >=1 && rating <= 1.5) {
        stars = {★☆☆☆☆}
    }
     else if (rating > 1.5 && rating <= 2.5) {
        stars = ★★☆☆☆
    } else if (rating > 2.5 && rating <= 3.5) {
        stars = ★★★☆☆
    } else if (rating > 3.5 && rating <= 4.5) {
        stars = ★★★★☆
    } else if (rating > 4.5 && rating <= 5) {
        stars = ★★★★★
    }



    return (
        <div className="card">
            <h2>Rating:{stars}</h2>
        </div>
        
    )

}

export default Rating; 
