import React from 'react';
import { NavLink } from 'react-router-dom';
//Images
import Facebook from '../images/facebook-icon.png';
import Instagram from '../images/instagram-icon.png';
import WeddingWire from '../images/image-10.jpeg';
import SCLogo from '../images/SCBEAUTYLOGODARK.png';
import MenuDropDown from '../images/burger-menu.png';

const ResetLocation = () => window.scrollTo(0, 0);

function ToggleMenu() {
  const HiddenMenu = document.querySelector('.main-menu');
  HiddenMenu.classList.toggle('show-menu');
}

function RemoveMenu() {
  const HiddenMenu = document.querySelector('.main-menu');
  HiddenMenu.classList.remove('show-menu');
}

function SideMenu() {
  return (
    <article className="sm:relative flex flex-col min-h-screen col-span-1 items-center absolute">
      <section className="sm:hidden z-50">
        <img
          className="MenuDropDown-icon w-max fixed cursor-pointer"
          onClick={ToggleMenu}
          src={MenuDropDown}
          alt=""
        ></img>
      </section>
      <section className="main-menu flex-col items-center fixed mt-60 font-titlefont text-2xl gap-5 text-slate-600 hidden sm:flex">
        <section className="flex flex-row gap-1 p-8">
          <section>
            <img
              className="max-w-full w-32 h-32 object-cover"
              src={SCLogo}
              alt=""
            ></img>
          </section>
        </section>
        <h1 className="sm:text-xl md:text-3xl text-center uppercase text-black">
          SC<br></br>
          <span className="font-semibold font-namefont">Beauty</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/scbeauty4u"
          onClick={() => {
            ResetLocation();
            RemoveMenu();
          }}
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: 'none',
                  color: 'rgb(2, 209, 203)',
                }
              : {}
          }
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/about"
          onClick={() => {
            ResetLocation();
            RemoveMenu();
          }}
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: 'none',
                  color: 'rgb(2, 209, 203)',
                }
              : {}
          }
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/pricing"
          onClick={() => {
            ResetLocation();
            RemoveMenu();
          }}
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: 'none',
                  color: 'rgb(2, 209, 203)',
                }
              : {}
          }
        >
          Pricing
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/contact"
          onClick={() => {
            ResetLocation();
            RemoveMenu();
          }}
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: 'none',
                  color: 'rgb(2, 209, 203)',
                }
              : {}
          }
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
        <p className="text-sm">&copy; 2023 by SC Beauty</p>
      </section>
    </article>
  );
}

export default SideMenu;
