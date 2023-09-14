import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header max-width'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='Zomato Logo' className='header-logo' />
      <div className="header-right">
        <div className="header-location-search-container">

          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div className=" ">Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center "></i>
          </div>

          <div className="location-search-separator"></div>

          <div className="header-searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            {/* 59:04 https://www.youtube.com/watch?v=TDLc9AWEcFA*/}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Header