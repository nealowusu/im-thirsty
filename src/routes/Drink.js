import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = (props) => {
  const { id } = useParams();
  const [drinkName, setDrinkName] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const drink = await response.json();
        setDrinkName(drink.drinks[0].strDrink);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h1>Product</h1>
      <h2>
        {
          //Check if message failed
          drinkName === 0 ? <div> Nothing Here </div> : <div> {drinkName} </div>
        }
      </h2>
    </>
  );
};

export default Products;
