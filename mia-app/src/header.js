 import React from "react"
 export default function Header (){
    return(
     <div>
     <nav>
        <div className="Title-Logo"> 
      <img src="https://dwglogo.com/wp-content/uploads/2017/09/React_logo_vector.svg" alt="logo-React" className="Logo" />
     <h1>Tech-Mommy</h1>
     </div> 
     <ul className="list-item">
        <li>Home</li>
        <li>About me</li>
        <li>Contacts</li>
      </ul>
      </nav>
  </div>
   )
    }