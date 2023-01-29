import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';

function Search() {
  return (
    <div className='search'>
    {/* <h1>This is serch page</h1> */}
      <div className='search_input'>
          <SearchIcon className='search_inputIcon'/>
          <input/>
          <MicIcon className='mic_Icon'/>         
      </div> 

      <div className='search_buttons'>
            <Button variant="outlined">TORCH SEARCH</Button>
            <Button variant="outlined">I'M FEELING LUCKEY</Button>
          </div> 
    </div>
  )
}

export default Search