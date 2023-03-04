import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";
import Form from "./components/Form";
import style from "./style.css";

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
      <Hero />
     
      <div className="card-wrap">{cards}</div>
      <Form />
    </div>
   
  );
}
