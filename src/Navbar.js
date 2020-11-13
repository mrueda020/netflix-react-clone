import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <>
      <div className={`navbar ${show && "navbar__black"}`}>
        <img
          className="navbar__logo"
          src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg"
          alt=""
        />
        <div className="navbar__options">
          <h3>Home</h3>
          <h3>Tv Shows</h3>
          <h3>Movies</h3>
          <h3>New & Popular</h3>
          <h3>My List</h3>
        </div>
        <div className="navbar__optionsright">
          <SearchIcon></SearchIcon>
          <CardGiftcardIcon></CardGiftcardIcon>
          <NotificationsIcon></NotificationsIcon>
          <img
            class="navbar__avatar"
            src="https://occ-0-901-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41"
            alt="Netflix Avatar"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
