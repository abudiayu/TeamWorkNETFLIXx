import React, { useEffect, useState } from "react";
import './header.css';
import netflixlog from "../../assets/images/ChatGPT Image Dec 12, 2025, 05_39_01 PM.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false); 



  const openModal = () => {
    setShowLogin(true);
  }
  const closeModal = () => {
   setShowLogin(false);
  }
  return (
    <div className="header-outer-container">
      <div className="header-container">

        {/* LEFT */}
        <div className="header-left">
          <img src={netflixlog} alt="Netflix Logo" />

          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

      
        <div className="header-right">

          
          <ul className="desktop-icons">
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li onClick={openModal}>
              <AccountBoxRoundedIcon />
            </li>
          </ul>

          
          <div
            className="dropdown-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <ArrowDropDownIcon className={menuOpen ? "rotate" : ""} />
          </div>
{/* {showLogin&& ()} */}
        </div>
      </div>
    </div>
  );
}

export default Header;
