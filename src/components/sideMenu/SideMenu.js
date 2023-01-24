import React from 'react';
import { NavLink } from 'react-router-dom';
//Images

import Burger from '../../images/burger-menu.png';
import Socials from './Socials';
//Functions
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
    <header className="sm:relative flex flex-col min-h-screen col-span-1 items-center absolute">
      <img
        className="burger-icon w-10 fixed cursor-pointer sm:hidden z-50 ml-6"
        onClick={ToggleMenu}
        src={Burger}
        alt=""
      ></img>
      <nav className="main-menu flex-col items-center fixed mt-60 text-2xl gap-5 text-slate-600 hidden sm:flex">
        <h1 className="sm:text-xl md:text-3xl text-center uppercase text-black font-light">
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
        >
          Gallery
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
                  color: 'rgb(37, 99, 235)',
                }
              : {}
          }
        >
          Pricing
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
                  color: 'rgb(37, 99, 235)',
                }
              : {}
          }
        >
          About
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
                  color: 'rgb(37, 99, 235)',
                }
              : {}
          }
        >
          Contact
        </NavLink>
        <Socials />
        <a>
          &copy; 2022 by SC Beauty
        </a>
      </nav>
    </header>
  );
}

export default SideMenu;
