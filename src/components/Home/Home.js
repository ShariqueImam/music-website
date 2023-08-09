import React from "react";
import Title from "./Title";
import Wedrobe from "./Wedrobe";
import Album from "./Album";
import About from "./About";
import Navbar from "../UI/Navbar/Navbar";
import Newsletter from "../UI/Newsletter/Newsletter";
import Footer from "../UI/Footer/Footer";
const Home = () => {
  const onScroll = (value) => {};
  return (
    <div className="flex flex-col items-center bg-[#0b0b0b]">
      <Navbar onScroll={onScroll} />
      <Title />
      <About />
      <Album />
      <Wedrobe />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
