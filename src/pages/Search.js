import React ,{useState} from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';

function Search() {
  const [input, setInput] = useState('');
  // State -> How we write variables in react

  const search = e =>{
    e.preventDefault(); //bxz of this function we don't need to refresh anything

    console.log('You hit the search button');
    // do something with input
  }

  return (
    <form className='search'>
    {/* <h1>This is serch page</h1> */}
      <div className='search_input'>
          <SearchIcon className='search_inputIcon'/>
          <input value={input} onChange={e => setInput(e.target.value)}/>
          <MicIcon className='mic_Icon'/>         
      </div> 

      <div className='search_buttons'>
            <Button type='submit' onClick={search} variant="outlined">Torch Search</Button>
            <Button variant="outlined">I'm feeling luckey</Button>
          </div> 
    </form>
  )
}

export default Search