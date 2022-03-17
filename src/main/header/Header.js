import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {

  return (
    <div className="header ">
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
        </div>
        <div className="header__middle">
            <SearchIcon />
            <input type="Search" placeholder="Search for something..."/>
        </div>
        <div className="header__right">
            <IconButton>
                <EmailIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
                <LogoutIcon />
            </IconButton>
            <IconButton>
            <h4>Log out</h4>
            </IconButton>
        </div>
    </div>
  )
}

export default Header