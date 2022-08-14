import React from 'react'

const BorderCountries = (props) => {
  function handleShowNeighboringCountry(){
    props.onShowNeighboringCountry(props.countryCode);
  }
  return (
    <button onClick = {handleShowNeighboringCountry}><small className='text-muted'>{props.countryCode}</small></button>
  )
}

export default BorderCountries