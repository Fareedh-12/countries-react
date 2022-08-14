import React from 'react'

const BorderCountries = (props) => {
  return (
    <button><small className='text-muted'>{props.countryCode}</small></button>
  )
}

export default BorderCountries