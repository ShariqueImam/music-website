import React from "react";
import ReactStars from "react-stars";
import styled from "styled-components";
const style = {
  wrapper: "mx-5 md:mx-3 my-16  flex flex-col items-start justify-end ",
  heading: "font-thin text-2xl md:text-2xl text-white w-[100%] md:w-[80%]",
  para: " text-sm md:text-xl mt-2 text-white font-semibold",
  line: "underline cursor-pointer",
};
const SingleCard = ({ swagData }) => {
  const FeaturedBackground1 = styled.div`
    background: url(${swagData.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    width: 30%; 
    height: 55vh;
  `;
  return (
    <FeaturedBackground1 className={style.wrapper}>
      <section className="w-full swagsItem p-6 md:p-6 rounded-tr-[50px] rounded-tl-[50px]">
        <h2 className={style.heading}>{swagData.name}</h2>
        <h2 className={style.para}>{swagData.price}</h2>
        <ReactStars count={5} size={24} color1={"#ffff00"} edit={false} />
      </section>
    </FeaturedBackground1>
  );
};
export default SingleCard;
