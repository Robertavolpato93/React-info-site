import React from "react";
export default function Card({img, score, country, city, price}){
    return(
        <div className= "card-container">
            <div className="card-img-container">
             <img className="card-img" src={img} alt="img"/>
            </div>
            
            <div className="card-stats">
                <img className="star" src="https://icon-library.com/images/star-icon-svg/star-icon-svg-11.jpg" alt="img"/>
             <span>{score}</span>
             
             <span>{country}</span>
            </div>
            <hr/>
            <div className="card-p">
               <p>{city}</p>
               <p>{price}</p>  
            </div>
            </div>
    )
}