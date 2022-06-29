import React, { useState, useEffect } from "react";
import DrinkForm from "../components/DrinkForm";

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
      <DrinkForm selectType={selectType} setSelectType={setSelectType} />
    </>
  );
};

export default Select;
