import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
//Images

import Burger from '../../assets/images/burger-menu.png';
import Logo from '../../assets/images/SCBEAUTYLOGODARK.png';
import Socials from './Socials';
import CSS from 'csstype';
//Functions
const activeMenuStyles: CSS.Properties = {
  textDecoration: 'none',
  color: 'rgb(37, 99, 235)',
};

const SideMenuMobile = () => {
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(true);
  const ref = useRef<HTMLImageElement>(null);

  function ToggleMenu() {
    hiddenMenu ? setHiddenMenu(false) : setHiddenMenu(true);
  }
  function RemoveMenu() {
    setHiddenMenu(true);
    window.scrollTo(0, 0);
  }

  return (
    <header className="SideMenuHide sm:relative flex flex-col col-span-1 items-center absolute">
      <section className="LogoBurgerContainer flex flex-row">
        <img className="max-w-full w-20 h-20" src={Logo} alt=""></img>
        <img
          className="burger-icon w-10 h-10 cursor-pointer md:hidden z-50 ml-6 mr-6"
          onClick={ToggleMenu}
          ref={ref}
          src={Burger}
          alt=""
          aria-hidden="true"
        />
      </section>
      <nav
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex-col items-center fixed mt-60 text-2xl gap-5 text-slate-600 hidden md:flex`}
      >
        <section>
          <img className="max-w-full object-cover" src={Logo} alt=""></img>
        </section>
        <h1 className="SideMenuHide sm:text-xl md:text-3xl text-center uppercase text-black font-light">
          SC<br></br>
          <span className="font-semibold font-namefont">Beauty</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/"
          onClick={() => {
            RemoveMenu();
          }}
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/pricing"
          onClick={() => {
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
        <a>&copy; 2024 by SC Beauty</a>
      </nav>
    </header>
  );
};

export default SideMenuMobile;
