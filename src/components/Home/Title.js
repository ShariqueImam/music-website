import React from "react";
import styled from "styled-components";
import homeImg from "../../assets/home/homebg.png";
import { Link } from "react-router-dom";
const Title = () => {
  const HomeBg = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${homeImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 100vh;
    width: 100vw;
  `;
  const style = {
    white: "homeTextWhite m-1 text-6xl md:text-8xl",
    color: "homeTextColor m-1 text-6xl md:text-8xl",
  };
  return (
    <HomeBg>
      <div className="flex items-center justify-center h-full mx-auto flex-col">
        <div className="flex-wrap w-[80%] md:w-[60%] flex items-center justify-center">
          <p className={style.white}>Let</p>
          <p className={style.white}>The</p>
          <p className={style.color}>Music</p>
          <p className={style.white}>Ignite</p>
          <p className={style.white}>Your</p>
          <p className={style.color}>Imagination</p>
        </div>
        <Link to="/music">
          <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-4">
            Explore Now
          </button>
        </Link>
      </div>
    </HomeBg>
  );
};

export default Title;
