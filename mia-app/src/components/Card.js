import React from "react";
export default function Card(){
    return(
        <div className="card">
            <img src="https://www.travel365.it/foto/seagull-flies-by-rialto-bridge-popular-landmark-venice-italy.jpg"/>
            <div className="card-stats">
                <img src="https://www.svgrepo.com/show/172818/star-outline.svg"/>
             <span>9.0</span>
             <span>(6)</span>
             <span>IT</span>
            </div>
            <p>visit Venice</p>
            <p>da 50€</p>
        </div>
    )
}