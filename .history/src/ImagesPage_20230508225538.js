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


function ImagesPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term, 'image'); // searchType = 'image'

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
            <img className='imagesPage_resultImage' src={item.image?.thumbnailLink} alt='' />
            <img className='searchPage_resultImage' src={}></img>
            <h2>{item.title}</h2>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ImagesPage;
