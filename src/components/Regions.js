import React from 'react'

const Regions = (props) => {
    function handleClick(){
        props.onSelect(props.text);

    }
  return (
    <option className="dropdown-item" value = {props.text} onClick={handleClick}>{props.text} </option>
  )
}

export default Regions