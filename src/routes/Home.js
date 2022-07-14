import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Hamburger from "hamburger-react";
import Menu from "../components/Menu";
import mainheader from "../img/mainheader.png";
import { MenuContext } from "../context/MenuContext";

const Home = (props) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  let navigate = useNavigate();
  const startDrinkSelect = (e) => {
    e.stopPropagation();
    navigate("/list");
  };

  return (
    <>
      <Menu />
      <nav className='topHeader'>
        <div className='hamburgerIcon'>
          <Hamburger
            color='#1904F2'
            size={45}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </nav>
      <main>
        <section className='masthead'>
          <div className='grid grid-cols-2 gap-2'>
            <div className=' mt-32 z-30'>
              <p className='title'>I'm Thirsty</p>
              <p className='subtitle'>DRINK GENERATOR</p>
            </div>
            <div className='-ml-6'>
              <div>
                <img src={mainheader} alt='Logo' />
              </div>
            </div>
          </div>
        </section>
        <section className='introcopy'>
          <p className='mt-12'>
            You need a drink? But what drink? There are so many and honestly,
            the same drink you keep drinking is boring, we're even getting bored
            thinking you drinking that same drink. Hit the button below so you
            can be better, and find your new drink.
          </p>
        </section>
        <section className='grid place-content-center '>
          <div>
            <button className='button' onClick={(e) => startDrinkSelect(e)}>
              Get Started<i className='gg-arrow-long-right'></i>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
