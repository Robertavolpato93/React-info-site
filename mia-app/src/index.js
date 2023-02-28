import React from "react";
import  ReactDOM  from "react-dom";
import  style  from "./index.css";
import Header from "./header";
import MainContent from "./mainContent";
 import Footer from "./footer";
 function App (){
  return(
      <div>
<Header />
<MainContent />
<Footer /> 
</div>
  )
 }

ReactDOM.render(<App />, document.getElementById ("root"))