import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Menu from "../components/Menu";
import mainheader from "../img/mainheader.png";
import Select from "../components/Select";

const Home = ({ listPage, setListPage, resultOutputs, setResultOutputs }) => {
  let navigate = useNavigate();
  const startDrinkSelect = (e) => {
    e.stopPropagation();
    setListPage(
      <Select
        listPage={listPage}
        setListPage={setListPage}
        resultOutputs={resultOutputs}
        setResultOutputs={setResultOutputs}
      />
    );
    navigate("/list");
  };

  return (
    <>
      <Menu />
      <main>
        <section className='masthead'>
          <div className='grid grid-cols-2 gap-2'>
            <div className=' mt-32 z-10'>
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
              <span className='buttonCTA'>Get Started</span>
              <i className='gg-arrow-long-right'></i>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
