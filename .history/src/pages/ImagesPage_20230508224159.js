import React, { useState, useEffect } from 'react';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import './ImagesPage.css';

function ImagesPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term, 'image'); // searchType = 'image'

  return (
    <div className='imagesPage'>
      {/* Header goes here */}
      
      {/* Render the search results */}
      {data?.items.map(item => (
        <div className='imagesPage_result'>
          <a href={item.link}>
            <img className='imagesPage_resultImage' src={item.image?.thumbnailLink} alt='' />
            <h2>{item.title}</h2>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ImagesPage;
