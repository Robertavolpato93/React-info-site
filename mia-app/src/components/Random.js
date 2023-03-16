import React, { useEffect, useState } from "react";
import Datas from "./Datas";



export default function Random() {
  const [Place, setPlace] = useState ({
   randomImage:"http://www.apluviaservice.it/wp-content/uploads/2019/05/agenzia-di-viaggi.jpg",
  })
  

  useEffect(()=>{
    const interval = setInterval (()=>{
      getPlaceImage()
    },3000);
   }, []);

   

  const [PlaceImage, setPlaceImage]= useState(Datas);

function getPlaceImage(){
  const placeArray = PlaceImage.datas.place
  const randomNumber = Math.floor(Math.random() * placeArray.length)
  const url = placeArray[randomNumber].url
  setPlace( prevPlace =>({
    ...prevPlace,
    randomImage:url
  }))

  }


  return (
   <main>
      <div className="form">
        <h3 className="h3-form"> Voglia di viaggiare ma non sai dove?<br/><br/> Lasciati ispirare...</h3>
         <br/>
        <div className="place">
         <img  className="form-img" src={Place.randomImage} />
         </div>
      
      </div>
      </main>
    );
}
