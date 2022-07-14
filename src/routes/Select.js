import React, { useState, useEffect } from "react";
import DrinkForm from "../components/DrinkForm";
import "./Select.css";
import Hamburger from "hamburger-react";

const Select = () => {
  const [selectType, setSelectType] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        const categories = await response.json();
        setSelectType(categories.drinks);
        console.log(categories);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <nav className='sideNav'>
        <div className='sideNavHamburger'>
          <Hamburger />
        </div>
      </nav>
      <main>
        <section>
          <h1>What Should I Drink</h1>
          <h4>Select Your Category</h4>
        </section>
        <section>
          <form className='grid grid-cols-4 gap-4'>
            <DrinkForm selectType={selectType} setSelectType={setSelectType} />
          </form>
        </section>
        <section>
          <h4>Add Your Ingredients</h4>
        </section>
        <section className='grid place-content-center '>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default Select;
