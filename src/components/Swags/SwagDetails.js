import React, { useState } from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import { Slide } from "react-awesome-reveal";
import Newsletter from "../UI/Newsletter/Newsletter";
// import '/assets/swags/swags.png' from "../../assets/swags/swags.png";
import ReactStars from "react-stars";
import pink from "../../assets/pink.png";
import { useParams } from "react-router-dom";
import Title from "./Title";
const SwagDetails = ({ match }) => {
  const params = useParams();
  const [Size, setSize] = useState("S");
  const onScroll = () => {};
  // window.scrollTo(0,0)
  const swagData = [
    {
      id: 1,
      img: '/assets/swags/bag.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 2,
      img: '/assets/swags/bag2.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 3,
      img: '/assets/swags/bag3.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 4,
      img: '/assets/swags/bag4.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 5,
      img: '/assets/swags/black-shorts-1.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 6,
      img: '/assets/swags/black-shorts-2.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 7,
      img: '/assets/swags/black-shorts-3.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 8,
      img: '/assets/swags/black-shorts-4.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 9,
      img: '/assets/swags/grey-short.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 10,
      img: '/assets/swags/grey-short1.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 11,
      img: '/assets/swags/grey-short2.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 12,
      img: '/assets/swags/grey-short3.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 13,
      img: '/assets/swags/Hoodie_Mockup.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 14,
      img: '/assets/swags/Hoodie_Mockup1.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 15,
      img: '/assets/swags/Hoodie_Mockup2.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 16,
      img: '/assets/swags/Hoodie_Mockup4.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 17,
      img: '/assets/swags/polof.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 18,
      img: '/assets/swags/shirt-design-4f.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 19,
      img: '/assets/swags/shirt-design.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 20,
      img: '/assets/swags/shirt-design2.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 21,
      img: '/assets/swags/shirt-design3.jpg',
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 22,
      img: '/assets/swags/umbrella-final.jpg',
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
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center "
      >
        <div className="flex flex-col md:flex-row">
        {/* <img src={blue} alt="" className="absolute z-0 ml-[20rem] mt-[-40rem]" /> */}
        <img src={pink} alt="" className="absolute z-0 ml-[-30rem] mt-[-60rem]" />

          <img
            src={product.img}
            alt=""
            className="rounded-2xl w-64 mx-auto md:w-[24rem]"
          />
          <section className="text-white mx-12 md:mx-24 flex flex-col items-center md:items-start">
            <h2 className="text-5xl md:text-4xl font-thin my-3">
              {product.name}
            </h2>
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
            </section>
            <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-4">
              SHOP NOW{" "}
            </button>
          </section>
        </div>
      </Slide>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SwagDetails;
