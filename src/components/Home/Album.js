import React from "react";
import styled from "styled-components";
import albumImg from "../../assets/home/album.png";
import albumImg1 from "../../assets/music/featured1.png";
import albumImg2 from "../../assets/music/featured2.png";
import albumImg3 from "../../assets/music/featured1.png";
import circle from "../../assets/circle.png";
import blue from "../../assets/blue.png";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
const Album = () => {
  const AlbumHeading = styled.div`
    background: url(${albumImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    margin: 9rem;
    height: 20vh;
    width: 90vw;
  `;
  return (
    <div className="flex flex-col items-center justify-center z-30">
      <img src={circle} alt="" className="absolute z-0 ml-[30rem] " />{" "}
      <img src={blue} alt="" className="absolute z-0 ml-[70rem] " />{" "}
      <AlbumHeading className="flex items-center justify-center">
        <p className="text-6xl md:text-8xl text-white">Music Albums</p>
      </AlbumHeading>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center"
      >
        <section className="w-[90vw]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // effect={"coverflow"}
            // centeredSlides={true}
            // coverflowEffect={{ rotate: 0, stretch: 0, depth: 0, modifier: 2.5 }}
            spaceBetween={0}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            className="flex items-center justify-center py-24"
          >
            <SwiperSlide className="flex items-center justify- center">
              <div className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms] ">
                <img
                  src={albumImg1}
                  alt=""
                  className=" scale-[0.9] w-[25rem] h-[33rem] rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms] ">
              <div className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms] ">
                <img
                  src={albumImg2}
                  alt=""
                  className=" scale-[0.9] w-[25rem] h-[33rem] rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms]">
              <div className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms] ">
                <img
                  src={albumImg3}
                  alt=""
                  className=" scale-[0.9] w-[25rem] h-[33rem] rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms] ">
              <div className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms] ">
                <img
                  src={albumImg2}
                  alt=""
                  className=" scale-[0.9] w-[25rem] h-[33rem] rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms]">
              <div className="flex items-center justify-center hover:scale-[0.9] transition duration-[300ms] ">
                <img
                  src={albumImg2}
                  alt=""
                  className=" scale-[0.9] w-[25rem] h-[33rem] rounded-xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </Slide>
    </div>
  );
};

export default Album;
