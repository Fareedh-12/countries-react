import React, { useState } from 'react'

const SearchInput = (props) => {
  const [text, setText] = useState('');
    function handleChange(e){
      setText(e.target.value);
    props.onSearch(e.target.value);
  }
  return (
    <input 
    type="text" 
    value = {text} 
    onChange={handleChange} 
    placeholder="&#xF002; Search for a country..." 
    style={{fontFamily:'Arial, FontAwesome', padding: 5+'px', width:40+'%',}} 
    />
  )
}

export default SearchInput