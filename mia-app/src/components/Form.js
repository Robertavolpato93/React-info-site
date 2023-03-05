import React from "react";
export default function Form() {
  return (
    <div className="form">
      
        <h3 className="h3-form"> Inserisci le tue preferenze,<br/> al resto ci pensiamo noi!</h3>
        <input type="text" placeholder="paese" />
        <br/>
        <input type="text" placeholder="Mare, montagna, città etc..." />
        <br/>
        <button type="submit">TROVA</button>
        
      
    </div>
  );
}
