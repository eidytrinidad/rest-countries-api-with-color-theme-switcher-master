import React,{useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import { CountryContext } from './CountryProvider';



function Country(props) {

const [,,,,,,,,darkMode] = useContext(CountryContext);
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


return (
<div className="CountryComponent">



    <div className="contenedor">
        <Link to="/"><button > <i className="fa fa-arrow-left"></i> Back</button></Link>

    </div>
{
        country.map(country=>(

            <section  className="contenedor">
        
                <article className="imagen">
                    <img src={country.flag} alt="" />
                </article>
        
                <article className="text" >
                    <h2 >{country.name}</h2>
                    <div className="countryDetails" >
        
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
   
  color:"#fff"
   
  
  }
  const LightMode={
    color:"#000"
    
  }

export default Country