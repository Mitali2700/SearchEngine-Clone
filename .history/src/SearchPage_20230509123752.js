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
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import RoomIcon from '@mui/icons-material/Room';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

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
        {/* <div className='searchPage_options'>
          <div className='searchPage_optionsLeft'>
            <div className='searchPage_option'>
              <SearchIcon/>
              <Link to="/search">All</Link>
            </div>
            <div className='searchPage_option'>
              <DescriptionIcon/>
              <Link to="/all">News</Link>
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
      </div> */}
    </div>
    </div>
    {
      term &&(
        <div className='searchPage_results'>
          <p className='searchPage_resultCount'>
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term} 
          </p>
          {data?.items.map(item =>(
            <div className='searchPage_result'>
            <a href={item.link}>
            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
              <img className='searchPage_resultImage' src={item.pagemap?.cse_image[0]?.src}></img>
            )}
            {item.displayLink} ▽
            </a>
            <a className='searchPage_resultTitle' href={item.link}>
              <h2>{item.title}</h2>
            </a>
            <p className='searchPage_resultSnippet'>{item.snippet}</p>
            </div>
          )) }
        </div>
      )
    }
    
 
   
    </div>
  )
}

export default SearchPage