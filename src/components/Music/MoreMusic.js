import React from "react";
import img1 from "../../assets/home/wedrobe1.png";
import styled from "styled-components";
import moreMusic from "../../assets/music/featured3.png";
import moreMusic1 from "../../assets/music/featured2.png";
import pink from '../../assets/pink.png'
import img2 from "../../assets/music/featured1.png";
const MoreMusic = () => {
  return (
    <div className="flex flex-col justify-center w-[100%] md:w-[90%] z-10">
      {" "}
      <img
        src={pink}
        alt=""
        className="absolute z-0 ml-[-20rem] mb-[-50rem]"
      />{" "}
      <div className="flex items-center justify-center flex-col my-8 my-16">
        <p className="text-4xl md:text-5xl text-white my-16">More Music</p>
        <p className="underlineColor w-[10vw] h-[0.3vh]"></p>
      </div>
      <section className="flex items-center justify-center flex-col md:flex-row">
        <SingleCard image={moreMusic} heading={"Green Hoodie"} price={"$150"} />
        <SingleCard image={moreMusic1} heading={"Green Hoodie"} price={"$150"} />
        <SingleCard image={moreMusic} heading={"Green Hoodie"} price={"$150"} />
      </section>
    </div>
  );
};

export default MoreMusic;

const style = {
  wrapper:
    "mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end w-[70%] md:w-[23%] hover:scale-[0.9] transition duration-[300ms]",
  heading: "font-thin text-2xl md:text-2xl text-white w-[100%] md:w-[80%]",
  para: " text-sm md:text-xl mt-2 text-white font-semibold",
  line: "underline cursor-pointer",
  button:
    "bg-white flex items-center justify-center text-black px-5 md:px-8 py-2 md:py-3 rounded-full mt-7",
  btnText: "bg-white flex items-center justify-center text-black",
};
const SingleCard = ({ price, heading, image }) => {
  const FeaturedBackground1 = styled.div`
    background: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    border-radius: 30px;
    height: 55vh;
  `;
  return (
    <FeaturedBackground1 className={style.wrapper}>
      <h2 className={style.heading}>{heading}</h2>
      <h2 className={style.para}>{price}</h2>
    </FeaturedBackground1>
  );
};
