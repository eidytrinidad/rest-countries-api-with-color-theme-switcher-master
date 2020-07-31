import React,{createContext,useState,useEffect} from 'react'

export const CountryContext = createContext();
function CountryProvider({children}) {



    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState('');
    const [error, setError] = useState()
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        getCountries();
        selectSearch();
    }, [select])

    const selectSearch=()=>{
        
        if (select !='') {
            
        fetch(`https://restcountries.eu/rest/v2/region/${select}`)
        .then(res => res.json())
        .then(data=>{
            setCountries(data)
  
        })
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (search== "") {
            setError("Input is empty or country not found");
      
          } else {
                
            fetch(`https://restcountries.eu/rest/v2/name/${search}`)
            .then(res => res.json())
            .then(data=>{
                setCountries(data)
               
            }).catch(error=>{
                console.log(error)
            })

           
          }
       
        // setFetchQuery();
        // setQuery(search);
        // setSearch('');

        console.log(search)
    }
    const getCountries =()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data=>{
            setCountries(data)
        })
    }

    const handleTheme =()=>{
        if (darkMode==false) {
            setDarkMode(true);
        }
        else{
            setDarkMode(false);
        }
        
    }

    return (
        <CountryContext.Provider value={[countries,search, setSearch,handleSubmit,select, setSelect,getCountries,darkMode,handleTheme]}>
            {children}
        </CountryContext.Provider>
    )
}

export default CountryProvider
