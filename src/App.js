import './App.css';
import CountryPage from './components/CountryPage';
import Heading from './components/Heading';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [displayCountry, setDisplayCountry] = useState('')
  function showCountry(countryName){
    setDisplayCountry(countryName);
  }
  return (
    <div className="App">
      <Heading/>
      <Router>
        <Routes>
          <Route path = '/' element = {<HomePage onShowCountry={showCountry}/>}/>
          <Route path = {'/'+displayCountry} element = {<CountryPage name = {displayCountry}/>}/>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
