import React, { useState } from "react";
import "./Menu.css";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuSetting, setMenuSetting] = useState("menuFalse");
  const [hamburgerColor, sethamburgerColor] = useState("#1904F2");

  let navigate = useNavigate();
  const navigateHome = (e) => {
    e.stopPropagation();
    navigate("/");
  };

  return (
    <>
      <nav className='topHeader'>
        <div className='hamburgerIcon'>
          <div className='topShelf'>
            <Hamburger
              color={hamburgerColor}
              onToggle={(toggled) => {
                if (toggled) {
                  setMenuSetting("menuTrue");
                  sethamburgerColor("#FFEF00");
                  console.log(menuSetting);
                } else {
                  // close a menu
                  setMenuSetting("menuFalse");
                  sethamburgerColor("#1904F2");
                  console.log(menuSetting);
                }
              }}
            />
          </div>

          <div className={menuSetting}>
            <div className='menuItems'>
              <ul>
                <li>
                  <a href='/#' onClick={navigateHome}>
                    Home
                  </a>
                </li>
                <li>What Should I Drink?</li>
                <li>Random Drink</li>
                <li>Trending Drinks</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
