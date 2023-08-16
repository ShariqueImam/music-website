import React from "react";
import styled from "styled-components";
import img from "../../assets/music/title.png";
import img1 from "../../assets/music/homeimg.png";
const Title = () => {
  const AboutHeading = styled.div`
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 40vh;
    margin: 6rem;
    width: 100vw;
    transform: scale(0.5);
  `;

  return (
    <div className="flex items-center justify-center flex-col w-[100%] md:w-[70%]">
      {" "}
      <AboutHeading className="flex items-center justify-center mt-24 md:mt-32">
        <p className="text-6xl md:text-8xl text-white">My Music</p>
      </AboutHeading>
      <div className="flex items-center flex-col md:flex-row">
        <section>
          <h2 className="text-7xl md:text-7xl text-white font-semibold w-[70%]">
            LISTEN IT ON SOUND CLOUD{" "}
          </h2>
          <a href="https://soundcloud.com/tmjuelz">
            <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-16">
              Listen Now
            </button>
          </a>
        </section>
        <img src={img1} alt="" className="scale-[0.7]" />
      </div>
    </div>
  );
};

export default Title;
