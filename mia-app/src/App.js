import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

import Random from "./components/Random";
import Form from "./components/Form";
import style from "./style.css";
import Footer from "./components/Footer";


export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        {...item}
         />
    );
  });
  return (
    <div>
      <Navbar />
      <Random />
       <Hero />
      
      <div className="card-wrap">{cards}</div>
      <Form />
     <Footer />
     
    </div>
   
  );
}
