import React from "react";
import styled from "styled-components";
import img from "../../assets/home/aboutheading.png";
import { Link } from "react-router-dom";
import about from "../../assets/home/about.png";
import { Slide } from "react-awesome-reveal";
import pink from "../../assets/pink.png";
const About = () => {
  const style = {};
  const AboutHeading = styled.div`
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    margin: 8rem;
    height: 20vh;
    width: 70vw;
  `;

  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <img src={pink} alt="" className="absolute z-0 ml-[-90rem] " />{" "}
      <AboutHeading className="flex items-center justify-center">
        <p className="text-6xl md:text-8xl text-white">About Me</p>
      </AboutHeading>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center"
      >
        <div className="my-8 md:my-16 flex flex-col md:flex-row mx-auto w-[95%] md:w-[80%] lg:w-[70%] items-center justify-between">
          <section className="md:w-[50%]">
            <p className="homeTextColor text-5xl md:text-6xl">TM Juelz</p>
            <p className="text-white my-4 text-2xl">Rapper, musician</p>
            <p className="text-white my-4 w-[95%] md:w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Link to="/music">
              <button className="exploreBtn text-white px-10 md:px-14 py-3 py-3 md:py-3 my-4">
                Learn More{" "}
              </button>
            </Link>
          </section>
          <section className="md:w-[40%]">
            <img src={about} alt="" />
          </section>
        </div>
      </Slide>
    </div>
  );
};

export default About;
