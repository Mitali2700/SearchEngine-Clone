import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
//import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
    <div className='home'>
        <div className='home_header'>
          <div className='home_headerLeft'>
              <Link to='/about'>About</Link>
              <Link to='/store'>Store</Link>
          </div>
          <div className='home_headerRight'>
              <Link to='/gmail'>Gmail</Link>
              <Link to='/images'>Images</Link>
            
            {/* Icon */}
            {/* Avatar */}
          </div>
        </div>
        <div className='home_body'>
          
        </div>
    </div>
  )
}

export default Home