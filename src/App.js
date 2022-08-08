import './App.css';
import CountryCard from './components/CountryCard';
import Heading from './components/Heading';
import RegionFilter from './components/RegionFilter';
import SearchInput from './components/SearchInput';
import allCountries from './countriesAll.json'

function App() {
  return (
    <div className="App">
      <Heading/>
      <div className='container contents'>
        <div className = "d-flex d-flex justify-content-between mb-5" >
        <SearchInput/>
        <RegionFilter/>
      </div>
      
      <div className="d-flex flex-wrap justify-content-between">
        {allCountries.map((country)=>(
        <CountryCard country = {country} key = {country.name}/>
      ))}
      
      </div>
      </div>
    </div>
  );
}

export default App;
