import React from "react";
import wedrobe from "../../assets/home/wedrobe.png";
import img1 from "../../assets/home/wedrobe1.png";
import styled from "styled-components";
const Wedrobe = () => {
  const WedrobeHeading = styled.div`
    background: url(${wedrobe});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 20vh;
    width: 100vw;
    transform: scale(0.5);
  `;
  return (
    <div className="flex flex-col  justify-center">
      {" "}
      <WedrobeHeading className="flex items-center justify-center">
        <p className="text-6xl md:text-8xl text-white">Wedrobe</p>
      </WedrobeHeading>
      <section className="flex items-center justify-center">
        <SingleCard
          image={img1}
          heading={"Green Hoodie"}
          price={"$150"}
        />
        <SingleCard
          image={img1}
          heading={"Green Hoodie"}
          price={"$150"}
        />
        <SingleCard
          image={img1}
          heading={"Green Hoodie"}
          price={"$150"}
        />
      </section>
      <button className="shopNow px-14 md:px-20 py-3 md:py-4 my-5 text-white mx-auto self-center">
Shop Now
      </button>
    </div>
  );
};

export default Wedrobe;

const style = {
  wrapper: "mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end",
  heading:
    "font-thin text-2xl md:text-2xl text-white w-[100%] md:w-[80%]",
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
    width:23%;
    height:55vh;
  `;
  return (
    <FeaturedBackground1 className={style.wrapper}>
      <h2 className={style.heading}>{heading}</h2>
      <h2 className={style.para}>{price}</h2>
    </FeaturedBackground1>
  );
};
