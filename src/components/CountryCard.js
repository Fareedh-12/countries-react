import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = (props) => {
  function handleShowCountry(){
    props.onShowCountry(props.country.cca3);
  }
  return (
      <div className="card h-100 mb-5" style={{width: 25+'rem',}} onClick = {handleShowCountry}>
        <Link to = {'/'+props.country.cca3} style={{marginBottom: 20+'px'}}><img src={props.country.flags.png} className="card-img-top h-5" alt={props.country.name.common + " flag."} style = {{height: 150+'px'}}/></Link>
        <div className="card-body">
            <h5 className="card-title">{props.country.name.common}</h5>
        </div>
        <div className="card-body cardBody">
            <p className="card-text">Population: <small className="text-muted">{props.country.population}</small></p>
            <p className="card-text">Region: <small className="text-muted">{props.country.region}</small></p>
            <p className="card-text">Capital: <small className="text-muted">{props.country.capital}</small></p>
        </div>
      </div>
  )
}

export default CountryCard