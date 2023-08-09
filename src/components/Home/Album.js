import React from "react";
import styled from "styled-components";
import albumImg from "../../assets/home/album.png";
import albumImg1 from "../../assets/home/album1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
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
    height: 20vh;
    width: 100vw;
    transform: scale(0.5);
  `;
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <AlbumHeading className="flex items-center justify-center">
        <p className="text-6xl md:text-8xl text-white">Music Albums</p>
      </AlbumHeading>
      <section className="w-[90vw]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="flex items-center justify-center py-12"
        >
          <SwiperSlide className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={albumImg1} alt="" className="scale-[0.9]" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={albumImg1} alt="" className="scale-[0.9]" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={albumImg1} alt="" className="scale-[0.9]" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={albumImg1} alt="" className="scale-[0.9]" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={albumImg1} alt="" className="scale-[0.9]" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Album;
