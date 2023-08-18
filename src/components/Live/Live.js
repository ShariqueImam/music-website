import React, { useEffect, useState } from "react";
import client from "../../client";
import Footer from "../UI/Footer/Footer";
import Navbar from "../UI/Navbar/Navbar";
import styled from "styled-components";
import Animator from "../UI/Animator";
import { Slide } from "react-awesome-reveal";
import liveImg from "../../assets/liveheading.png";
import blue from "../../assets/blue.png";
import pink from "../../assets/pink.png";
const Live = () => {
  const onScroll = () => {};
  const AboutHeading = styled.div`
    background: url(${liveImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 30vh;
    // margin: 6rem;
    width: 100vw;
    transform: scale(0.5);
  `;
  const [Link, setLink] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const youtubeLink = await client.fetch(`*[_type=='youtube']`);
      console.log(youtubeLink[0].youtubeLink);
      if (youtubeLink && youtubeLink.length > 0) {
        setLink(youtubeLink[0].youtubeLink);
      }
    };
    getProduct();
  }, []);
  return (
    <Animator>
      <div className="flex flex-col items-center bg-[#0b0b0b] z-10">
        <Navbar onScroll={onScroll} />
        <img
          src={pink}
          alt=""
          className="absolute z-0 ml-[-70rem] mt-[-40rem]"
        />
        <img
          src={blue}
          alt=""
          className="absolute z-0 ml-[70rem] mt-[-40rem]"
        />{" "}
        <AboutHeading className="flex items-center justify-center mt-24 md:mt-32">
          <p className="text-6xl md:text-8xl text-white">Live Lobby</p>
        </AboutHeading>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center "
        >
          <div className="live w-[80vw] h-[80vh] flex items-center justify-center text-white text-5xl md:text-6xl">
            <p>Will be Live Soon....</p>
          {/* <iframe
            id="stream"
            width="560"
            height="315"
            // www.YouTube.com/channel/UCyIrupqJGBK5yGBz4xhEPeg/live
            src="https://www.youtube.com/embed/live_stream?channel=UCyIrupqJGBK5yGBz4xhEPeg&autoplay=1"
            frameborder="0"
            allowfullscreen
          ></iframe> */}
          </div>
        </Slide>
        <Footer />
      </div>
    </Animator>
  );
};

export default Live;
