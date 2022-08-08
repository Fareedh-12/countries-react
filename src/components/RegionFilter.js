import React from 'react'

const RegionFilter = () => {
  return (
    <div className="btn-group">
  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter by region 
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="google.com">Africa </a>
    <a className="dropdown-item" href="google.com">America</a>
    <a className="dropdown-item" href="google.com">Asia</a>
    <a className="dropdown-item" href="google.com">Europe</a>
    <a className="dropdown-item" href="google.com">Oceania</a>
  </div>
</div>
  )
}

export default RegionFilter