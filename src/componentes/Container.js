import React,{ useContext }from "react";
import Header from "../componentes/Header";
import { CountryContext } from "./CountryProvider";
import CountryList from "../componentes/CountryList";
import Country from "./Country";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Container() {
  const [countries,,,,,,,darkMode] = useContext(CountryContext);


  return (
    <div style={(darkMode) ? DarkMode : LightMode} className="Container">
      <Router>
        
          <Header />
          <Route path="/" exact component={CountryList}/>
          <Route path="/country" component={Country} />
        
      </Router>
    </div>
  );
}

const DarkMode={
   
  backgroundColor:"#202c37",
 

}
const LightMode={
backgroundColor:"#fafafa",
color:"#000"
}
export default Container;
