import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import  "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon></MenuIcon>
        <Link to="/">
        <img className="header__logo" src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh.jpg" alt="logo"/>

        </Link>
      </div>

      <div className="header__input">
        <input 
        onChange={e => setInputSearch(e.target.value)} 
        value={inputSearch} 
        placeholder="Search" 
        type="text"></input>
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton"></SearchIcon>

        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon"></VideoCallIcon>
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <Avatar
          alt="Profile Icon"
          src="https://avatars1.githubusercontent.com/u/8495748?s=400&u=add61d07cc4c4e2820dcc04881c0e18248544aa4&v=4"
        ></Avatar>
      </div>
    </div>
  );
}

export default Header;

//             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YouTube_Logo"> </img>
