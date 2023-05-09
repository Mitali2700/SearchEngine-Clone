import React, { useState, useEffect } from 'react';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
// import './ImagesPage.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import Search from '../src/pages/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Response from "./response"

function ImagesPage() {
  const [{term='tesla'}, dispatch] = useStateValue();
 const { data } = useGoogleSearch(term, 'image'); // searchType = 'image'
  //const data = Response;

  console.log(data);
  return (
    <div className='imagesPage'>
      {/* Header goes here */}
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
      {/* Render the search results */}
      {data?.items.map(item => (
        <div className='imagesPage_result'>
          <a href={item.link}>
            <img className='' src={item.image?.thumbnailLink} alt='' />
            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
              <img className='searchPage_resultImage' src={item.pagemap?.cse_image[0]?.src}></img>
            )}
            {/* <img className='searchPage_resultImage' src={}></img> */}
            <h2>{item.title}</h2>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ImagesPage;
