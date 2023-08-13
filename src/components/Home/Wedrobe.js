import React from "react";
import wedrobe from "../../assets/home/wedrobe.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/home/wedrobe1.png";
import { Slide } from "react-awesome-reveal";
import pink from "../../assets/pink.png";
import styled from "styled-components";
const Wedrobe = () => {
  const WedrobeHeading = styled.div`
    background: url(${wedrobe});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    margin: 8rem;
    height: 20vh;
    width: 70vw;
  `;
  return (
    <div className="flex flex-col  justify-center z-10">
      {" "}
      <img src={pink} alt="" className="absolute z-0 ml-[-30rem] mb-36" />{" "}
      <WedrobeHeading className="flex items-center justify-center">
        <p className="text-6xl md:text-8xl text-white">Wedrobe</p>
      </WedrobeHeading>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center w-[100%] h-[100%]"
      >
        <section className="flex items-center justify-center w-[100%]">
          <SingleCard image={img1} heading={"Green Hoodie"} price={"$150"} />
          <SingleCard image={img1} heading={"Green Hoodie"} price={"$150"} />
          <SingleCard image={img1} heading={"Green Hoodie"} price={"$150"} />
        </section>
        <button className="mx-auto  exploreBtn shopNow px-14 md:px-20 py-3 md:py-4 mt-24 text-white mx-auto self-center">
          <Link to="/swags">Shop Now</Link>
        </button>
      </Slide>
    </div>
  );
};

export default Wedrobe;

const style = {
  wrapper:
    "mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end",
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
    width: 23%;
    height: 55vh;
  `;
  return (
    <FeaturedBackground1 className={style.wrapper}>
      <h2 className={style.heading}>{heading}</h2>
      <h2 className={style.para}>{price}</h2>
    </FeaturedBackground1>
  );
};
