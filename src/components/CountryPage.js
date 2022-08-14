import React, { useEffect, useState } from 'react'
import BorderCountries from './BorderCountries'
import { Link } from 'react-router-dom'

const CountryPage = (props) => {
  const [country, setCountry] = useState(null)
  useEffect(()=>{
    fetch(`https://restcountries.com/v2/name/${props.name}`)
    .then((res)=> res.json())
    .then((data)=> {
      setCountry(data)
    })
  }, [props.name])
   
  return (
    <div>
      {country ? country.map((country)=>(
        
      <div className="container" >
        <Link to = '/'><button>Back</button></Link>
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={country.flag}
              alt="country flag"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">{country.name}</h1>
            <div className= 'twoColumns mb-5'>
                    <p className="card-text">Native Name: <small className="text-muted">{country.nativeName}</small></p>
                    <p className="card-text">Population: <small className="text-muted">{country.population}</small></p>
                    <p className="card-text">Region: <small className="text-muted">{country.region}</small></p>
                    <p className="card-text">Sub Region: <small className="text-muted">{country.subregion}</small></p>
                    <p className="card-text">Capital: <small className="text-muted">{country.capital}</small></p>
                    <p className="card-text">Top level domain: <small className="text-muted">{country.topLevelDomain}</small></p>
                    <p className="card-text">Currencies: {country.currencies.map((currency,index)=>(<small className="text-muted" key={index}>{Object.values(currency)[1]},</small>))}</p>
                    <p className="card-text">Languages: {country.languages.map((language,index)=>(<small className="text-muted" key={index}>{Object.values(language)[2]},</small>))}</p>
                </div>
                <div>
                    {country.borders && <h5>Border Countries: {country.borders.map((country, index)=>(<BorderCountries key = {index} countryCode = {country}/>))}</h5>}
                </div>
          </div>
      </div>
    </div>
      ))
      
      : console.log('loading')}
    
    </div>

    

  )
}
export default CountryPage