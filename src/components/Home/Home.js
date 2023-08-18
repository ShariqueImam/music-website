import React from "react";
import Title from "./Title";
import Wedrobe from "./Wedrobe";
import Album from "./Album";
import About from "./About";
import Navbar from "../UI/Navbar/Navbar";
import Animator from "../../components/UI/Animator";
import Footer from "../UI/Footer/Footer";
import axios from "axios";
const Home = () => {
  const onScroll = (value) => {};
  const sunSign = "leo";
  
  const code = async () => {
    const fetchHoroscope = async () => {
      try {
        const response = await axios.get(
          `http://horoscope-api.herokuapp.com/horoscope/today/${sunSign}`
        );
        const horoscopeData = response.data;
        console.log("Horoscope Data:", horoscopeData);
      } catch (error) {
        console.error("Error fetching horoscope:", error.message);
      }
    };

    fetchHoroscope();
  };
  code();
  return (
    <Animator>
      <div className="flex flex-col items-center bg-[#0b0b0b] z-10">
        <Navbar onScroll={onScroll} />
        <Title />
        <About />
        <Album />
        <Wedrobe />
        <Footer />
      </div>
    </Animator>
  );
};

export default Home;
