import React, { useContext } from "react";
import { CountryContext } from "./CountryProvider";
import {Link} from 'react-router-dom'
import SearchComponents from "./SearchComponents";


function CountryList() {
  const [countries,,,,,,,darkMode] = useContext(CountryContext);
  console.log(darkMode)
  return (
      <>
      <SearchComponents/>
      <section className="countryList">
        <div className="contenedor">
       
              {
            
            countries.map(country => (
                <article style={(darkMode) ? DarkMode : LightMode} className="country" key={country.name}>
                   <Link to={{ pathname:"Country",state:{name:country.name}
            }}>
                  <img src={country.flag} alt="" />
                  </Link>
                  <div className="text">
                    <h2>{country.name}</h2>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                  </div>
                  
                </article>
              ))
            }
              
             
  
        </div>
      </section>
      </>
  );
}
const DarkMode={
   
  backgroundColor:"#2b3945",
color:"#fff",
boxShadow:" 0px 0px 0px 0px rgb(24, 24, 24)"

}
const LightMode={
backgroundColor:"#fff",
color:"#000"
}
export default CountryList;
