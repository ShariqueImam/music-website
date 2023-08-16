import React from "react";
import img1 from "../../assets/music/upcoming.png";
import styled from "styled-components";
import upcoming1 from "../../assets/music/featured1.png";
import upcoming2 from "../../assets/music/featured2.png";
import lock from "../../assets/music/lock.png";
import pink from "../../assets/pink.png";
const Upcoming = () => {
  const AboutHeading = styled.div`
    background: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 40vh;
    width: 100vw;
    margin: 5rem;

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
    width: 25vw;
    height: 60vh;
    &:hover {
      scale: 0.9;
    }
    transition: all 0.3s;
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
    width: 25vw;
    height: 60vh;
    &:hover {
      scale: 0.9;
    }
    transition: all 0.3s;
  `;
  const [Up1, setUp1] = React.useState(false);
  const [Up2, setUp2] = React.useState(false);
  return (
    <div>
      <AboutHeading className="flex items-center justify-center">
        <p className="text-6xl md:text-8xl text-white">Upcoming Music</p>
      </AboutHeading>{" "}
      <div className="flex items-center justify-center ">
        <Upcoming1
          onMouseEnter={() => setUp1(true)}
          onMouseLeave={() => setUp1(false)}
          className={`flex items-center justify-center flex flex-col `}
        >
          <p className=" borderColor border-2 w-[15vw] h-[50vh] rounded-full "></p>
          <img src={lock} alt="" className="scale-[8] w-2" />
          {Up1 && (
            <p className="text-white fixed text-xl bg-gray-300 rounded-xl p-2 imgHoverText">
              Available Soon
            </p>
          )}
        </Upcoming1>
        <Upcoming2
          onMouseEnter={() => setUp2(true)}
          onMouseLeave={() => setUp2(false)}
          className="flex items-center justify-center flex flex-col hover:scale-[0.9] transition duration-[300ms]"
        >
          {" "}
          <p className=" borderColor border-2 w-[15vw] h-[50vh] rounded-full "></p>{" "}
          {Up2 && (
            <p className="text-white fixed text-xl bg-gray-300 rounded-xl p-2 imgHoverText">
              Available Soon
            </p>
          )}
          <img src={lock} alt="" className="scale-[8] w-2" />
        </Upcoming2>
      </div>
    </div>
  );
};

export default Upcoming;
