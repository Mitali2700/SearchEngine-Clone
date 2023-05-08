import React from 'react'
import { useStateValue } from './StateProvider'
//import useGoogleSearch from './useGoogleSearch';
import './SearchPage.css'
import Response from "./response"
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

function SearchPage(){
  const [{term}, dispatch] = useStateValue();

  // Live API call
  //const {data} = useGoogleSearch(term); 

  const data = Response;

  console.log(data);
  
  return (
    <div className='searchPage'>
    <div className='searchPage_header'>
      <Link to ="/">
      <img src="/logo-search.png" alt="" height="100"/>
        
      </Link>
    </div>
    
    <div className='searchPage_results'>
    
    </div>
    </div>
  )
}

export default SearchPage