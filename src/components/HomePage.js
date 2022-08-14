import CountryCard from './CountryCard';
import RegionFilter from './RegionFilter';
import SearchInput from './SearchInput';
import { useState , useEffect } from 'react';

const HomePage = (props) => {
  const [countries, setCountries] = useState(null);
    const [countriesToSearch, setCountriesToSearch] = useState(null)
    const [region, setRegion] = useState(null);

    useEffect (()=>{
      fetch(`https://restcountries.com/v3.1/${region ? 'region/' + region : 'all' }`)
      .then((res)=> res.json())
      .then((data) => {
        setCountries(data)
        setCountriesToSearch(data)
      })
    }, [region])
    // search functionality
    function onSearch(countryName){
      setCountries(countriesToSearch.filter((country)=>{return country.name.common.toLowerCase().includes(countryName.toLowerCase())}));
    }

    //filter functionality
    function onFilter(filteredRegion){
      setRegion(filteredRegion !== 'All' && filteredRegion);
    }

    //Display country functionality



  return (
    <div className="App">
      <div className='container contents'>
        <div className = "d-flex d-flex justify-content-between mb-5" >
          <SearchInput onSearch = {onSearch}/>
          <RegionFilter onFilter = {onFilter}/>
        </div>
      
        <div className="d-flex flex-wrap justify-content-between">
          {countries && countries.map((country)=>(
          <CountryCard country = {country} key = {country.name.common} onCountry ={props.onCountry} onShowCountry = {props.onShowCountry}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage