import React from 'react'
import { useState } from 'react'
import Regions from './Regions';

const RegionFilter = (props) => {
  const [filteredRegion, setFilteredRegion] = useState('');
  function handleSelect(region){
    region === 'All' ? setFilteredRegion(''):setFilteredRegion(()=> region)
    props.onFilter(region);
  }

  return (
    <div className="btn-group">
  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {filteredRegion.length>0? <span>{filteredRegion}</span> : <span>Filter by region</span> }
  </button>
  <div className="dropdown-menu">
    {filteredRegion.length>0 && <Regions text = 'All' onSelect = {handleSelect}/> }
    <Regions text = 'Africa' onSelect = {handleSelect}/>
    <Regions text = 'Americas' onSelect = {handleSelect}/>
    <Regions text = 'Asia' onSelect = {handleSelect}/>
    <Regions text = 'Europe' onSelect = {handleSelect}/>
    <Regions text = 'Oceania' onSelect = {handleSelect}/>
  </div>
</div>
  )
}

export default RegionFilter