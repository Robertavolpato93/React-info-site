import  React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import style from "./style.css"

export default function  App() {
     return (
            <div>
                <Navbar />
                <Hero />
                <Card />
            </div>
        )
    }

