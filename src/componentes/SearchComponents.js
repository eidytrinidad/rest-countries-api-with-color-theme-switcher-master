import React,{useContext} from 'react'
import { CountryContext } from './CountryProvider'

function SearchComponents() {
    const [,search,setSearch,handleSubmit,select,setSelect,,darkMode] = useContext(CountryContext)
    return (
     
        <section className="SearchComponents contenedor">
            <form onSubmit={handleSubmit} >
                <div className="searchBar" style={(darkMode) ? DarkMode.input : LightMode}>
                    <button > <i className="fas fa-search"></i></button>
                    <input type="text" 
                    placeholder="Search for a country..."
                    value={search}onChange={e=>setSearch(e.target.value)}
                    style={(darkMode) ? DarkMode.input : LightMode}/>
                </div>
               
            </form>
  

            <article className="selectbox" style={(darkMode) ? DarkMode.select : LightMode}>
                <select  style={(darkMode) ? DarkMode.select : LightMode} value={select} onChange={(e)=>setSelect(e.target.value)}>
                <option value="" disabled selected>Filter by region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </article>
        </section>
    )
}

const DarkMode={
   
    input:{
        backgroundColor:"#2b3945",
    color:"#fff",
    boxShadow:" 0px 0px 0px 0px rgb(24, 24, 24)"
    },
    select:{
        backgroundColor:"#2b3945",
        color:"#fff",
        boxShadow:" 0px 0px 0px 0px rgb(24, 24, 24)"
    }
  }
  const LightMode={
  backgroundColor:"#fff",
  color:"#000"
  }
export default SearchComponents
