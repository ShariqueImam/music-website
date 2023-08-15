import logo from "../../../assets/home/logo.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";

const Footer = (props) => {
  const style = {
    wrapper:
      "font text-neutral-100 flex flex-col w-[100%] md:w-[80%] mx-auto items-center justify-between py-6 md:py-12 mt-44",
    para: "font-light border-move-animation list-none cursor-pointer text-white mx-2 md:mx-3  text-md tracking-wide",
  };

  return (
    <div className={style.wrapper}>
      <div className="flex items-start justify-between w-[100%]">
        <section className="flex flex-col items-start justify-center">
          <img src={logo} alt="" />
          {/* <h2 className="text-sm w-[70%] font-thin">
            All rights reserved @mysteriousmusic.co.uk{" "}
          </h2> */}
        </section>
        <section>
          <h2 className="font-semibold">Home</h2>
          <p className="font-thin my-4">About</p>
          <p className="font-thin my-4">Music Album</p>
          <p className="font-thin my-4">Wedrobe</p>
        </section>
        <section className="">
          <h2 className="font-semibold">Music</h2>
          <p className="font-thin my-4">Featured</p>
          <p className="font-thin my-4">Upcoming</p>
          <p className="font-thin my-4">Wedrobe</p>
        </section>
        <section>
          <h2 className="font-semibold">Swags</h2>
          <p className="font-thin my-4">Hoodies</p>
          <p className="font-thin my-4">Shirts</p>
          <p className="font-thin my-4">Shorts</p>
          <p className="font-thin my-4">Polo</p>
          <p className="font-thin my-4">Umbrella</p>
        </section>
        <section>
          <h2 className="font-semibold">Horoscope</h2>
          <p className="font-thin my-4">Horoscope</p>
        </section>
        <section>
          <h2 className="font-semibold">Live</h2>
          <p className="font-thin my-4">Live</p>
        </section>
      </div>
      <div className="mt-16 flex items-center justify-between w-[100%]">
        <h2 className="my-3 md:my-1">All rights reserved @mysteriousmusic.co.uk</h2>
        <section className="flex">
          <AiFillInstagram className="text-white text-2xl mx-3" />
          <AiFillFacebook className="text-white text-2xl mx-3" />
          <AiFillYoutube className="text-white text-2xl mx-3" />
          <AiFillLinkedin className="text-white text-2xl mx-3" />
          <BsTiktok className="text-white text-2xl mx-3" />
        </section>
      </div>
    </div>
  );
};

export default Footer;
