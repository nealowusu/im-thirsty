import React, { useState } from "react";
import CategoryType from "./CategoryType";
import "./Select.css";
import Menu from "./Menu";
import IngredientsTags from "./IngredientTags";

const Select = ({ listPage, setListPage, resultOutputs, setResultOutputs }) => {
  const [categorySelects, setCategorySelects] = useState([]);
  const [ingredientSelects, setIngredientSelects] = useState([]);

  let categoryDrinks = [];
  let ingredientDrinks = [];

  const getDrinkSelect = async (e, id) => {
    e.preventDefault();
    try {
      const catResponse = await Promise.all(
        categorySelects.map((cat, i) => {
          return fetch(
            `https://thecocktaildb.com/api/json/v2/9973533/filter.php?c=${cat}`
          ).then((res) => res.json());
        })
      );

      catResponse.forEach((array) => {
        return categoryDrinks.push(...array.drinks);
      });

      console.log(categoryDrinks);

      const ingResponse = await Promise.all(
        ingredientSelects.map((ing, i) => {
          return fetch(
            `https://thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ing}`
          ).then((res) => res.json());
        })
      );

      ingResponse.forEach((array) => {
        return ingredientDrinks.push(...array.drinks);
      });

      console.log(ingredientDrinks);
      const filteredList = categoryDrinks.filter((drinks, i) => {
        return ingredientDrinks.some((v) => {
          return v.strDrink === drinks.strDrink;
        });
      });

      if (ingredientDrinks.length === 0) {
        await setResultOutputs(categoryDrinks);
      } else {
        await setResultOutputs(filteredList);
      }

      setListPage("result");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Menu />
      <main>
        <section>
          <h1>What Should I Drink</h1>
          <h4>Select Your Category</h4>
        </section>
        <section className='mt-4'>
          <div className='grid grid-cols-4 gap-4 '>
            <CategoryType
              categorySelects={categorySelects}
              setCategorySelects={setCategorySelects}
            />
          </div>
        </section>
        <section className='mt-4'>
          <h4>Add Your Ingredients</h4>
          <div className='formdesc'>
            Type your ingredients to help with the selection.
          </div>
        </section>
        <section className='mt-1.5'>
          <IngredientsTags
            ingredientSelects={ingredientSelects}
            setIngredientSelects={setIngredientSelects}
          />
        </section>

        <section className='grid place-content-center mt-4'>
          <div>
            <button onClick={getDrinkSelect} className='button'>
              <span className='buttonCTA'>What Should I Drink?</span>
              <i className='gg-arrow-long-right'></i>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Select;
