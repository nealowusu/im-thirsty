import React, { useState, useEffect } from "react";
import Select from "react-select";

const IngredientsTags = ({ ingredientSelects, setIngredientSelects }) => {
  const [ingredientOptions, setIngredientOptions] = useState();
  const [menuIsOpen, setMenuIsOpen] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        const ingredientslist = await response.json();
        setIngredientOptions(ingredientslist.drinks);
        console.log();
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);

  const listIngredients =
    ingredientOptions &&
    ingredientOptions.map((ingr, i) => {
      return {
        value: ingr.strIngredient1,
        label: ingr.strIngredient1,
      };
    });

  const selectIngredients = (e) => {
    let ingredientArry = e.map((arr, i) => {
      return arr.value;
    });
    setIngredientSelects(ingredientArry);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "10px",
    }),
  };

  return (
    <>
      <Select
        options={listIngredients}
        styles={customStyles}
        placeholder={"Start Typing.."}
        isMulti={true}
        onInputChange={(input) => {
          if (input) {
            setMenuIsOpen(true);
          } else {
            setMenuIsOpen(false);
          }
        }}
        menuIsOpen={menuIsOpen}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        onChange={(e) => {
          selectIngredients(e);
        }}
      />
    </>
  );
};

export default IngredientsTags;
