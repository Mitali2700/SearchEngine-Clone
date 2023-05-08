import React from 'react'
import { useStateValue } from './StateProvider'
//import useGoogleSearch from './useGoogleSearch';
import './SearchPage.css'
import Response from "./response"
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import Search from '../src/pages/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage(){
  const [{term='tesla'}, dispatch] = useStateValue();

  // Live API call
  //const {data} = useGoogleSearch(term); 

  const data = Response;

  console.log(data);
  
  return (
    <div className='searchPage'>
    <div className='searchPage_header'>
      <Link to ="/">
      <img className="searchPage_logo" src="/logo-search.png" alt="" />
      </Link>
      <div className='searchPage_headerBody'>
        <Search hideButtons/>
        <div className='searchPage_options'>
          <div className='searchPage_optionsLeft'>
            <div className='searchPage_option'>
              <SearchIcon/>
              <Link to="/all">All</Link>
            </div>
            <div className='searchPage_option'>
              <DescriptionIcon/>
              <Link to="/news">News</Link>
            </div>
            <div className='searchPage_option'>
              <ImageIcon/>
              <Link to="/images">Images</Link>
            </div>
            <div className='searchPage_option'>
              <LocalOfferIcon/>
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className='searchPage_option'>
              <RoomIcon/>
              <Link to="/maps">Map</Link>
            </div>
            <div className='searchPage_option'>
              <MoreVertIcon/>
              <Link to="/more">More</Link>
            </div>
          </div>

          <div className='searchPage_optionsRight'>
            <div className='searchPage_option'>
              <Link to="/settings">Setting</Link>
            </div>
            <div className='searchPage_option'>
              <Link to="/tools">Tools</Link>
            </div>
        </div>
      </div>
    </div>
    </div>
    {
      term &&(
        <div className='searchPage_results'>
          <p className='searchPage_resultCount'>
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map }
        </div>
      )
    }
    
 
   
    </div>
  )
}

export default SearchPage