import React, { useState } from "react";
import Datas from "./Datas";



export default function Form() {
const [PlaceImage, setPlaceImage]= useState("");

function getPlaceImage(){
  const placeArray = Datas.datas.place
  const randomNumber = Math.floor(Math.random() * placeArray.length)
  setPlaceImage(placeArray[randomNumber].url)
}
  return (
   <main>
      <div className="form">
        <h3 className="h3-form"> Inserisci le tue preferenze,<br/> al resto ci pensiamo noi!</h3>
        <input type="text" placeholder="paese" />
        <br/>
        <input type="text" placeholder="Mare, montagna, città etc..." />
        <br/>
        <button  onClick={getPlaceImage} className="form-button" >TROVA</button>
       <img  className="form-img" src={PlaceImage} />
        </div>
        
   </main>
    
        );
}
