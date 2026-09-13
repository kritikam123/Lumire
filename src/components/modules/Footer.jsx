import Logo from "../elements/Logo";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#f4f2ee] text-black opacity-70">
      <div className="border-b border-primary-300 px-27 py-14 grid grid-cols-2 items-center">
        <div className="flex flex-col gap-4">
          <Logo background="primary" className="text-[40px]" />
          <p className="py-4 font-serif text-xl leading-snug">
            Ethical, sustainable, unique jewelry at half the price of luxury
            brands
          </p>
          <div className="flex p-4 gap-4">
            <Link to="/asda">
              <FaFacebook />
            </Link>
            <Link to="/asda">
              <FaInstagram />
            </Link>
            <Link to="/asda">
              <FaGoogle />
            </Link>
            <Link to="/asda">
              <FaLinkedin />
            </Link>
            <Link to="/asda">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col font-serif leading-snug gap-4">
            <p className="py-4 text-xl ">Company</p>
            <Link to={"/aboutus"} className="font-normal text-base">
              About Us
            </Link>
            <Link to={"/contactus"} className="font-normal text-base">
              Contact Us
            </Link>
            <span className="font-normal text-base">Services</span>
          </div>
          <div className="font-serif text-xl leading-snug flex flex-col gap-4">
            <p className="py-4  text-xl">Support</p>
            <span className="font-normal text-base">Help Center</span>
            <span className="font-normal text-base">Feedback</span>
          </div>
          <div className="font-serif text-xl leading-snug flex flex-col gap-4">
            <p className="py-4 font-serif text-xl leading-snug">Contact Us</p>
            <span className="flex items-center gap-2 font-normal text-base">
              <MdLocalPhone /> +977 9800000000
            </span>
            <span className="flex items-center gap-2 font-normal text-base">
              <MdOutlineEmail />
              support@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-27">
        <div className="py-4 opacity-70">
          <p className="font-serif leading-snug flex gap-2 text-m">
            ©<span>2026 Lumire. All rights reserved.</span>
          </p>
        </div>
        <div className="font-serif text-m leading-snug flex justify-center gap-4 py-4 opacity-70">
          <span className="flex items-center text-m">
            Privacy Policy
          </span>
          <span className="flex items-center text-m">
            Terms of use
          </span>
          <span className="flex items-center text-m">
            Legal
          </span>
          <span className="flex items-center text-m">
            Site Map
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
