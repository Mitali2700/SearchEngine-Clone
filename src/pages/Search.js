import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';

function Search() {

  const search = e =>{
    e.preventDefault(); //bxz of this function we don't need to refresh anything
  }

  return (
    <div className='search'>
    {/* <h1>This is serch page</h1> */}
      <div className='search_input'>
          <SearchIcon className='search_inputIcon'/>
          <input/>
          <MicIcon className='mic_Icon'/>         
      </div> 

      <div className='search_buttons'>
            <Button onClick={search} variant="outlined">Torch Search</Button>
            <Button variant="outlined">I'm feeling luckey</Button>
          </div> 
    </div>
  )
}

export default Search