import React from "react";
import Title from "./Title";
import FeaturedMusic from "./FeaturedMusic";
import Upcoming from "./Upcoming";
import MoreMusic from "./MoreMusic";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import Animator from "../UI/Animator";
import { Slide } from "react-awesome-reveal";
import pink from "../../assets/pink.png";
const Music = () => {
  const onScroll = () => {};
  return (
    // <Animator>
    <div className="flex flex-col items-center bg-[#0b0b0b] z-10">
      <Navbar onScroll={onScroll} />
      <img src={pink} alt="" className="absolute z-0 ml-[-70rem]" />
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center "
      >
        <Title />
      </Slide>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center "
      >
        <FeaturedMusic />
      </Slide>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center w-[100%] h-[100%]"
      >
        <MoreMusic />
      </Slide>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center "
      >
        <Upcoming />
      </Slide>
      <Footer />
    </div>
    // </Animator>
  );
};

export default Music;




