import React from "react";
import Title from "../Swags/Title";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import { Slide } from "react-awesome-reveal";
import SwagsList from "./SwagsList";
import Animator from "../UI/Animator";
import swagImg1 from "../../assets/swags/swags.png";
import pink from "../../assets/pink.png";
import blue from "../../assets/blue.png";
import circle from "../../assets/circle.png";
const Swags = () => {
  const onScroll = () => {};
  const swagData = [
    {
      id: 1,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 2,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 3,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 4,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 5,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 6,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 7,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 8,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 9,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 10,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 11,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 12,
      img: swagImg1,
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
  ];
  return (
    <Animator>
      <div className="bg-[#0b0b0b] flex flex-col items-center z-10">
        <img src={pink} alt="" className="absolute z-0 ml-[-70rem]" />
        <Navbar onScroll={onScroll} />
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center w-[100%] h-[100%]"
        >
          <Title />
        </Slide>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center w-[100%] h-[100%]"
        >
          <SwagsList swagData={swagData} />
        </Slide>
       
        <img src={blue} alt="" className="absolute z-0 ml-[50rem] mt-[60rem]" />{" "}
        <Footer />
      </div>
    </Animator>
  );
};

export default Swags;
