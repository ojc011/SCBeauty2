import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
//Images
import Facebook from '../images/facebook-icon.png';
import Instagram from '../images/instagram-icon.png';
import WeddingWire from '../images/gallery-one/image-10.jpeg';
import SCLogo from '../images/SCBEAUTYLOGODARK.png';
const ResetLocation = () => window.scrollTo(0, 0);

function SideMenu() {
  return (
    <div className="flex flex-col min-h-screen col-span-1 items-center">
      <div className="flex flex-col items-center fixed mt-60 font-titlefont text-2xl gap-5 text-slate-600">
        <section className="flex flex-row gap-1 p-8">
          <section>
            <img
              className="max-w-full w-32 h-32 object-cover"
              src={SCLogo}
              alt=""
            ></img>
          </section>
        </section>
        <h1 className="text-3xl text-center uppercase text-black">
          SC<br></br>
          <span className="font-semibold font-namefont">Beauty</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/scbeauty4u"
          onClick={ResetLocation}
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/about"
          onClick={ResetLocation}
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/blog"
          onClick={ResetLocation}
        >
          Pricing
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/contact"
          onClick={ResetLocation}
        >
          Contact
        </NavLink>
        <section className="flex flex-row gap-3">
          <a
            href="https://www.facebook.com/scbeauty4u/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6	max-w-full"
              src={Facebook}
              alt="Facebook icon"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/samanthacronkbeauty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6	max-w-full"
              src={Instagram}
              alt="Instagram icon"
            ></img>
          </a>
          <a
            href="https://www.weddingwire.com/biz/sc-beauty-austin/180d2c99e8efa991.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6	max-w-full"
              src={WeddingWire}
              alt="WeddingWire Icon"
            ></img>
          </a>
        </section>
      </div>
    </div>
  );
}

export default SideMenu;
