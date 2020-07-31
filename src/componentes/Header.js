import React,{useContext} from 'react'
import { CountryContext } from './CountryProvider'

function Header() {
const [,,,,,,getCountries,darkMode,handleTheme] = useContext(CountryContext)


    return (
        <header style={(darkMode) ? DarkMode.header :LightMode}>

        <div className="contenedor">
             <h1 onClick={getCountries} >Where in the world?</h1>
            <button style={(darkMode) ? DarkMode.btn :LightMode}onClick={handleTheme}><i className="far fa-moon"></i>Dark Mode</button>
        </div>
           
        </header>
    )
}

const DarkMode={
   
    header:{
        backgroundColor:"#2b3945",
        color:"#fff",
        boxShadow:" 0px 6px 5px 0px rgb(34, 34, 34)"
    },
    btn:{
        backgroundColor:"#2b3945",
        color:"#fff"
    }

}
const LightMode={
    backgroundColor:"#fff",
    color:"#000"
}
export default Header
