import React, { useState } from "react";
import styled from "styled-components";
import img from "../../assets/horoscope/horoscope.png";
import img1 from "../../assets/horoscope/background.png";
import sign1 from "../../assets/horoscope/1.png";
import sign2 from "../../assets/horoscope/2.png";
import sign3 from "../../assets/horoscope/3.png";
import sign4 from "../../assets/horoscope/4.png";
import sign5 from "../../assets/horoscope/5.png";
import sign6 from "../../assets/horoscope/6.png";
import sign7 from "../../assets/horoscope/7.png";
import sign8 from "../../assets/horoscope/8.png";
import sign9 from "../../assets/horoscope/9.png";
import sign10 from "../../assets/horoscope/10.png";
const MainPage = () => {
  const AboutHeading = styled.div`
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 25vh;
    width: 80vw;
    transform: scale(0.5);
  `;
  const Heading1 = styled.div`
    background: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    // height: 100vh;
    width: 100vw;
  `;
  const [Sign, setSign] = useState("1");
  const style = {
    item: "w-16 md:w-24 scale-[0.8] ",
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <AboutHeading className="flex items-center justify-center mt-24 md:mt-32">
        <p className="text-6xl md:text-8xl text-white">Horoscope</p>
      </AboutHeading>
      <Heading1 className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col my-8">
          <p className="text-4xl md:text-5xl text-white my-4 text-center md:text-center">
            To Know About Your Daily Horoscope
          </p>
          <p className="underlineColor w-[15vw] h-[0.3vh]"></p>
        </div>
        <div className="flex flex-wrap w-[95%] md:w-[80%] mx-auto items-center justify-center">
          <p
            onClick={() => setSign("1")}
            className={`${
              Sign == "1" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
          >
            <img src={sign1} alt="" className={style.item} />
          </p>
          <p
            onClick={() => setSign("2")}
            className={`${
              Sign == "2" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
          >
            <img src={sign2} alt="" className={style.item} />{" "}
          </p>
          <p
            onClick={() => setSign("3")}
            className={`${
              Sign == "3" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
          >
            <img src={sign3} alt="" className={style.item} />{" "}
          </p>
          <p
            onClick={() => setSign("4")}
            className={`${
              Sign == "4" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
          >
            <img src={sign4} alt="" className={style.item} />{" "}
          </p>
          <p
            onClick={() => setSign("5")}
            className={`${
              Sign == "5" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
          >
            <img src={sign5} alt="" className={style.item} />{" "}
          </p>
          <p
            onClick={() => setSign("6")}
            className={`${
              Sign == "6" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
          >
            <img src={sign6} alt="" className={style.item} />{" "}
          </p>
          <p
            onClick={() => setSign("7")}
            className={`${
              Sign == "7" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
          >
            <img src={sign7} alt="" className={style.item} />{" "}
          </p>
          <p
            onClick={() => setSign("8")}
            className={`${
              Sign == "8" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
          >
            <img src={sign8} alt="" className={style.item} />{" "}
          </p>
          <p
            className={`${
              Sign == "9" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8`}
            onClick={() => setSign("9")}
          >
            <img src={sign9} alt="" className={style.item} />{" "}
          </p>
          <p
            className={`${
              Sign == "10" && "horo  rounded-full"
            } bg-gray-500 bg-opacity-[0.3]  p-12 rounded-full mx-8 md:mx-12 my-8`}
            onClick={() => setSign("10")}
          >
            <img src={sign10} alt="" className={style.item} />{" "}
          </p>
        </div>
        <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-4">
          Explore Now
        </button>
      </Heading1>
    </div>
  );
};

export default MainPage;
