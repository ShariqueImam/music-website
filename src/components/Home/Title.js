import React from "react";
import styled from "styled-components";
import homeImg from "../../assets/home/homebg.png";
import { Slide } from "react-awesome-reveal";
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
    white: "homeTextWhite m-1 text-5xl md:text-8xl",
    color: "homeTextColor m-1 text-5xl md:text-8xl",
  };
  return (
    <HomeBg>
      <div className="flex items-center justify-center h-full mx-auto flex-col">
        <Slide direction="up" triggerOnce className="flex items-center justify-center">
          <div className="flex-wrap w-[80%] md:w-[60%] flex items-center justify-center">
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Let
            </p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              The
            </p>
            <p
              className={style.color}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Music
            </p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Ignite
            </p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Your
            </p>
            <p
              className={style.color}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Imagination
            </p>
          </div>
          <Link to="/music">
            <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12">
              Explore Now
            </button>
          </Link>
        </Slide>
      </div>
    </HomeBg>
  );
};

export default Title;
