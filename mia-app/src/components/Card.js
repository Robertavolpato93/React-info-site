import React from "react";
export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
       badgeText = "SOLD OUT" 
    } else if ( props.price.value > 40)
    badgeText = "-10% NOW!"
     

    return(
        <div className= "card-container">
           {badgeText && <div className="card-badge">{badgeText}</div>} 
            <div className="card-img-container">
             <img className="card-img" src={props.img} alt="img"/>
            </div>
            <div className="card-stats">
                <img className="star" src="https://icon-library.com/images/star-icon-svg/star-icon-svg-11.jpg" alt="img"/>
             <span className="score">{props.score}</span>
             <span>{props.country}</span>
            </div>
            <hr/>
            <div className="card-p">
               <p >{props.city}</p>
               <p> da {props.price.value} €</p>  
            </div>
            </div>
    )
}