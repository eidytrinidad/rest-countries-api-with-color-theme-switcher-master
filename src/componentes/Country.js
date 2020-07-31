import React,{useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import { CountryContext } from './CountryProvider';



function Country(props) {

const [,,,,,,,darkMode] = useContext(CountryContext);
const {name: countryName} = props.location.state;

const [country, setCountry] = useState([])

const getCountry = () => {
fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
.then(res => res.json())
.then(data=>{
setCountry(data)

}).catch(error=>{
console.log(error)
})
};

useEffect(() => {
getCountry();



}, [countryName])

console.log(darkMode)
return (
<div className="CountryComponent">



    <div className="contenedorBtn">
        <Link to="/"><button style={(darkMode) ? DarkMode.btn : LightMode}> <i className="fa fa-arrow-left"></i> Back</button></Link>

    </div>
{
        country.map(country=>(

            <section key={country.name} className="contenedor">
        
                <article className="imagen">
                    <img src={country.flag} alt="" />
                </article>
        
                <article className="text"  style={(darkMode) ? DarkMode : LightMode}>
                    <h2 >{country.name}</h2>
                    <div className="countryDetails"  style={(darkMode) ? DarkMode : LightMode}>
        
                        <div>
                            <p><span>Native Name:</span> {country.nativeName}</p>
                            <p><span>Population:</span> {country.population}</p>
                            <p><span>Region:</span> {country.region}</p>
                            <p><span>Sub Region:</span> {country.subregion}</p>
                            <p><span>Capital:</span> {country.capital}</p>
                        </div>

                        <div>
                        <p><span>Top Level Domain:</span> {country.topLevelDomain}</p>
                        <p><span>Currencies:</span> {country.currencies.map(currency=>(`${currency.name}`))}</p>
                        <p><span>Language:</span> {country.languages.map(language=>(`${language.name},`))}</p>
                        
                        </div>
        
                    </div>
                    
                </article>
            </section>
        ))
    }

</div>
)

}


const DarkMode={
   
  color:"#fff",
  btn:{
      background:"#2b3945",
      color:"#fff",
      boxShadow:"0 0 0 0"
  }
  }
  const LightMode={
    color:"#000"
    
  }

export default Country