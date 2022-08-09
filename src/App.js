import './App.css';
import CountryCard from './components/CountryCard';
import Heading from './components/Heading';
import RegionFilter from './components/RegionFilter';
import SearchInput from './components/SearchInput';
import allCountries from './countriesAll.json'
import { useState } from 'react';

function App() {
    const [countries, setCountries] = useState(allCountries);

    //search functionality
    function onSearch(countryName){
      setCountries(allCountries.filter((country)=>{return country.name.toLowerCase().includes(countryName.toLowerCase())}));
    }

    //filter functionality
    function onFilter(filteredRegion){
      setCountries(filteredRegion !== 'All' ? allCountries.filter((country) => country.region === filteredRegion): allCountries);
    }
  return (
    <div className="App">
      <Heading/>
      <div className='container contents'>
        <div className = "d-flex d-flex justify-content-between mb-5" >
        <SearchInput onSearch = {onSearch}/>
        <RegionFilter onFilter = {onFilter}/>
      </div>
      
      <div className="d-flex flex-wrap justify-content-between">
        {countries.map((country)=>(
        <CountryCard country = {country} key = {country.name}/>
      ))}
      
      </div>
      </div>
    </div>
  );
}

export default App;
