import React, { useState } from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import Newsletter from "../UI/Newsletter/Newsletter";
import swagImg1 from "../../assets/swags/swags.png";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import Title from "./Title";
const SwagDetails = ({ match }) => {
  const params = useParams();
  const [Size, setSize] = useState("S");
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
  const product = swagData.find((item) => item.id === parseInt(params.id));

  return (
    <div className="bg-[#0b0b0b] flex flex-col items-center">
      <Navbar onScroll={onScroll} />
      <Title />
      <div className="flex flex-col md:flex-row">
        <img src={product.img} alt="" className="rounded-2xl w-64 mx-auto md:w-auto" />
        <section className="text-white mx-12 md:mx-24 flex flex-col items-center md:items-start">
          <h2 className="text-5xl md:text-4xl font-thin my-3">{product.name}</h2>
          <h2 className="font-thin my-4">{product.info}</h2>
          <h2 className="font-semibold text-5xl md:text-6xl my-4">
            {product.price}
          </h2>{" "}
          <ReactStars count={5} size={24} color1={"#4E88FA"} edit={false} />
          <section className="flex my-4 ">
            <p
              onClick={() => setSize("S")}
              className={`${
                Size == "S" && "bg-[#fb2b92] bg-opacity-[0.3]"
              } mr-5 border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
            >
              S
            </p>
            <p
              onClick={() => setSize("M")}
              className={`${
                Size == "M" && "bg-[#fb2b92] bg-opacity-[0.3]"
              } mr-5  border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
            >
              M
            </p>
            <p
              onClick={() => setSize("L")}
              className={` ${
                Size == "L" && "bg-[#fb2b92] bg-opacity-[0.3]"
              } mr-5  border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
            >
              L
            </p>
            <p
              onClick={() => setSize("XL")}
              className={`${
                Size == "XL" && "bg-[#fb2b92] bg-opacity-[0.3]"
              } mr-5  border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
            >
              XL
            </p>
            <p
              onClick={() => setSize("8.5")}
              className={`${
                Size == "8.5" && "bg-[#fb2b92] bg-opacity-[0.3]"
              } mr-5 border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
            >
              8.5
            </p>
          </section>
          <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-4">
            SHOP NOW{" "}
          </button>
        </section>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SwagDetails;
