import React from 'react'

const Regions = (props) => {
    function handleClick(){
        props.onSelect(props.text);

    }
  return (
    <button className="dropdown-item" onClick={handleClick}>{props.text} </button>
  )
}

export default Regions