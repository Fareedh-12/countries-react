import React from 'react'

const CountryCard = (props) => {
  return (
        <div className="card h-100 mb-5" style={{width: 25+'rem',}}>
        <img src={props.country.flag} className="card-img-top" alt={props.country.name + " flag."}/>
        <div className="card-body">
            <h5 className="card-title">{props.country.name}</h5>
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