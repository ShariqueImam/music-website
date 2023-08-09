import React from "react";
import img1 from "../../assets/music/upcoming.png";
import styled from "styled-components";
import upcoming1 from "../../assets/music/featured1.png";
import upcoming2 from "../../assets/music/featured2.png";
import lock from "../../assets/music/lock.png";
const Upcoming = () => {
  const AboutHeading = styled.div`
    background: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 40vh;
    width: 100vw;
    transform: scale(0.5);
  `;
  const Upcoming1 = styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.85),
        rgba(0, 0, 0, 0.85)
      ),
      url(${upcoming1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    border-radius: 70px;
    transform: scale(0.9);
    width: 20vw;
    height: 60vh;
  `;
  const Upcoming2 = styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.85),
        rgba(0, 0, 0, 0.85)
      ),
      url(${upcoming2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    border-radius: 70px;
    transform: scale(0.9);
    width: 35vw;
    height: 60vh;
  `;
  return (
    <div>
      <AboutHeading className="flex items-center justify-center">
        <p className="text-6xl md:text-8xl text-white">Upcoming Music</p>
      </AboutHeading>
      <div className="flex items-center justify-center">
        <Upcoming1 className="flex items-center justify-center flex flex-col">
          <p className=" borderColor border-2 w-[15vw] h-[50vh] rounded-full "></p>
          <img src={lock} alt="" className="scale-[8] w-2"/>
        </Upcoming1>
        <Upcoming2 className="flex items-center justify-center flex flex-col">
          {" "}
          <p className=" borderColor border-2 w-[15vw] h-[50vh] rounded-full "></p>{" "}
          <img src={lock} alt="" className="scale-[8] w-2"/>
        </Upcoming2>
      </div>
    </div>
  );
};

export default Upcoming;
