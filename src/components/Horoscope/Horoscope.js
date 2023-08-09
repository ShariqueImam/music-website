import React from "react";
import Footer from "../UI/Footer/Footer";
import Newsletter from "../UI/Newsletter/Newsletter";
import Navbar from "../UI/Navbar/Navbar";
import MainPage from "./MainPage";
const Horoscope = () => {
  const onScroll = () => {};
  return (
    <div className="flex flex-col items-center">
      <Navbar onScroll={onScroll} />
      <MainPage />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Horoscope;
