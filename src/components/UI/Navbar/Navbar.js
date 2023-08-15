import React, { useState, useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import NavDrawer from "./NavDrawer";
import logo from "../../../assets/home/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "animate.css";
const Navbar = (props) => {
  const style = {
    navDrawer: "flex sm:hidden items-center text-white ",
    wrapper:
      "text-gray-900 pt-1 md:py-6 z-10 w-[100%] md:w-[85%] bg-opacity-[0.9] mx-auto  font absolute",
    mainNav:
      "flex items-center justify-between py-1 md:py-1 hidden sm:flex w-[100%] md:w-[90%] mx-auto",
    navList: "w-[60%] flex items-center justify-center ",
    list: "font-light border-move-animation list-none cursor-pointer text-white mx-4 md:mx-4  text-md tracking-wide",
    navContainer: "flex items-center justify-center",
    cartButton:
      "contactHover contactNow border-gradient-purple  border w-[15%] font-light rounded-lg text-white tracking-wider flex items-center justify-center mx-5 px-3 py-2 text-md",
    img: "cursor-pointer w-[15%]",
    input: "bg-transparent text-white cursor-pointer",
  };
  const [Item, setItem] = useState("home");

  props.onScroll(Item);
  const handleScroll = (val) => {
    setItem(val);
  };
  const location = useLocation();
  return (
    // install the mui first for the Navdrawer
    <div className={style.wrapper}>
      <nav className={style.mainNav}>
        <div className={style.img}>
          <img src={logo} alt="logo for website" />
        </div>
        <div className={style.navList}>
          <ul className={style.navContainer}>
            <Link to="/">
              <li
                className={`${
                  location.pathname == "/" ? "text-[#EA2587]" : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
              >
                Home
              </li>
            </Link>
            <Link to="/music">
              <li
                className={`${
                  location.pathname == "/music"
                    ? "text-[#EA2587]"
                    : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
                onClick={() => setItem("services")}
              >
                Music
              </li>
            </Link>
            <Link to="/swags">
              <li
                className={`${
                  location.pathname == "/swags"
                    ? "text-[#EA2587]"
                    : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
                onClick={() => setItem("about")}
              >
                Swags
              </li>
            </Link>
            <Link to="/horoscope">
              <li
                className={`${
                  location.pathname == "/horoscope"
                    ? "text-[#EA2587]"
                    : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
                onClick={() => setItem("email")}
              >
                Horoscope
              </li>
            </Link>
            <Link to="/">
              <li
                className={`${
                  location.pathname == "/lobby"
                    ? "text-[#EA2587]"
                    : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
                onClick={() => setItem("email")}
              >
                Lobby
              </li>
            </Link>
          </ul>
        </div>
          <button
            className={style.cartButton}
            onClick={() => setItem("contact")}
          >
        <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
            Listen Now
        </a>
          </button>
      </nav>
      <div className={style.navDrawer}>
        <NavDrawer onScroll={handleScroll} />
      </div>
    </div>
  );
};

export default Navbar;
