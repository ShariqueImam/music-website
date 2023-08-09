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
      "font text-neutral-100 flex flex-col w-[100%] md:w-[60%] mx-auto items-center justify-between py-6 md:py-12 ",
    para: "font-light border-move-animation list-none cursor-pointer text-white mx-2 md:mx-3  text-md tracking-wide",
  };

  return (
    <div className={style.wrapper}>
      <div className="flex items-start justify-between w-[100%]">
        <section className="flex flex-col items-start justify-center">
          <img src={logo} alt="" />
          <h2 className="text-sm w-[70%] font-thin">
            Book your trip in minute, get full Control for much longer.
          </h2>
        </section>
        <section>
          <h2 className="font-semibold">Consultation</h2>
          <p className="font-thin my-4">Silver</p>
          <p className="font-thin my-4">Gold</p>
          <p className="font-thin my-4">Platinum</p>
        </section>
        <section className="">
          <h2 className="font-semibold">About</h2>
          <p className="font-thin my-4">What I offer </p>
          <p className="font-thin my-4">Contact</p>
        </section>
        <section>
          <h2 className="font-semibold">More</h2>
          <p className="font-thin my-4">Destinations</p>
          <p className="font-thin my-4">Airlines</p>
          <p className="font-thin my-4">Low Fare trips</p>
        </section>
      </div>
      <div className="mt-16 flex items-center justify-between w-[100%]">
        <h2 className="my-3 md:my-1">All rights reserved @brownboystravels</h2>
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
