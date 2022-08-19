import React, { useState, useEffect } from "react";
import drinkselectA from "../img/drinkselect_A.png";

const CategoryType = ({ categorySelects, setCategorySelects }) => {
  const [categoryOptions, setCategoryOptions] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        const categories = await response.json();
        setCategoryOptions(categories.drinks);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);

  const selectCategory = (e) => {
    let category = e.target.value;
    setCategorySelects((categorySelects) => [...categorySelects, category]);
  };

  return (
    <>
      {categoryOptions &&
        categoryOptions.map((drinks, i) => {
          return (
            <label>
              <input
                onChange={selectCategory}
                type='checkbox'
                name={drinks.strCategory}
                value={drinks.strCategory}
              />
              <img src={drinkselectA} alt='' />
              <div className='selectlabel'>{drinks.strCategory}</div>
            </label>
          );
        })}
    </>
  );
};

export default CategoryType;
