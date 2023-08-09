import React from "react";
import Title from "./Title";
import FeaturedMusic from "./FeaturedMusic";
import Upcoming from "./Upcoming";
import MoreMusic from "./MoreMusic";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
const Music = () => {
  const onScroll = () => {};
  return (
    <div className="flex flex-col items-center bg-[#0b0b0b]">
      <Navbar onScroll={onScroll} />
      <Title />
      <FeaturedMusic />
      <MoreMusic />
      <Upcoming />
      <Footer />
    </div>
  );
};

export default Music;
