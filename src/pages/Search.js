import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function Search() {
  return (
    <div className='search'>
    {/* <h1>This is serch page</h1> */}
      <div className='search_input'>
          <SearchIcon className='search_inputIcon'/>
          <input/>
          <MicIcon />
      </div>  
    </div>
  )
}

export default Search