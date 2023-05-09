import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from './Search'

function Home() {
  return (
    <div className='home'>
        <div className='home_header'>
          <div className='home_headerLeft'>
              {/* <Link to='/about'>About</Link>
              <Link to='/store'>Store</Link> */}
          </div>
          <div className='home_headerRight'>
              <Link to='/gmail'>Gmail</Link>
             
              <AppsIcon className='app_icon'/>             
            {/* Icon */}

              <Avatar />
            {/* Avatar */}
          </div>
        </div>
        <div className='home_body'>
          <img src="/logo-search.png" alt="" height="100"/>
          <div className='home_inputContainer'>
          {/* search */}
          <Search hideButtons />
        </div>
        </div>

        
    </div>
  )
}

export default Home