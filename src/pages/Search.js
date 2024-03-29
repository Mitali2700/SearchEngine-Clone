import React ,{useState} from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
  const [{}, dispatch]= useStateValue()
  const [input, setInput] = useState("");
  // State -> How we write variables in react
  const navigate = useNavigate();

  const search = e =>{
    e.preventDefault(); //bxz of this function we don't need to refresh anything

    console.log('You hit the search button');
    // do something with input

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term:input
    })

    navigate('/search');
  }

  return (
    <form className='search'>
    {/* <h1>This is serch page</h1> */}
      <div className='search_input'>
          <SearchIcon className='search_inputIcon'/>
          <input value={input} onChange={e => setInput(e.target.value)}/>
          <MicIcon className='mic_Icon'/>         
      </div> 

      {!hideButtons ? (
        <div className='search_buttons'>
            <Button type='submit' onClick={search} variant="outlined">Torch Search</Button>
            <Button variant="outlined">I'm feeling luckey</Button>
          </div> 
      ): (
        <div className='search_buttons'>
            <Button className='search_buttonsHidden' type='submit' onClick={search} variant="outlined">Torch Search</Button>
            <Button className='search_buttonsHidden' variant="outlined">I'm feeling luckey</Button>
          </div> 
      )}

    
    </form>
  )
}

export default Search