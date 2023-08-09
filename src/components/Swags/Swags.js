import React from "react";
import Title from "../Swags/Title";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import SwagsList from "./SwagsList";
import swagImg1 from "../../assets/swags/swags.png";
const Swags = () => {
  const onScroll = () => {};
  const swagData = [
    { id: 1, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5",info:'This is the great product and we like it.' },
    { id: 2, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5",info:'This is the great product and we like it.' },
    { id: 3, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5",info:'This is the great product and we like it.' },
    { id: 4, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5",info:'This is the great product and we like it.' },
    { id: 5, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5" ,info:'This is the great product and we like it.'},
    { id: 6, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5" ,info:'This is the great product and we like it.'},
    { id: 7, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5" ,info:'This is the great product and we like it.'},
    { id: 8, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5" ,info:'This is the great product and we like it.'},
    { id: 9, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5" ,info:'This is the great product and we like it.'},
    { id: 10, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5",info:'This is the great product and we like it.' },
    { id: 11, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5" ,info:'This is the great product and we like it.'},
    { id: 12, img: swagImg1, name: "Green Hoodie", price: "$70", rating: "5" ,info:'This is the great product and we like it.'},
  ];
  return (
    <div className="bg-[#0b0b0b] flex flex-col items-center">
      <Navbar onScroll={onScroll} />
      <Title />
      <SwagsList swagData={swagData} />
      <Footer />
    </div>
  );
};

export default Swags;
