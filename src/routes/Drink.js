import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import "./Drink.css";
import mainheader from "../img/mainheader.png";
import instagramlogo from "../img/Instagram.png";
import facebooklogo from "../img/Facebook.png";
import twitterlogo from "../img/Twitter.png";

const Products = (props) => {
  const { id } = useParams();
  const [drinkName, setDrinkName] = useState();
  const [drinkGlass, setDrinkGlass] = useState();
  const [drinkImage, setDrinkImage] = useState();
  const [drinkIng, setDrinkIng] = useState([]);
  const [drinkMeasure, setDrinkMeasure] = useState([]);
  const [drinkDesc, setDrinkDesc] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const drink = await response.json();
        setDrinkName(drink.drinks[0].strDrink);
        setDrinkGlass(drink.drinks[0].strGlass);
        setDrinkImage(drink.drinks[0].strDrinkThumb);
        setDrinkIng([
          drink.drinks[0].strIngredient1,
          drink.drinks[0].strIngredient2,
          drink.drinks[0].strIngredient3,
          drink.drinks[0].strIngredient4,
          drink.drinks[0].strIngredient5,
          drink.drinks[0].strIngredient6,
          drink.drinks[0].strIngredient7,
          drink.drinks[0].strIngredient8,
          drink.drinks[0].strIngredient9,
          drink.drinks[0].strIngredient10,
          drink.drinks[0].strIngredient11,
          drink.drinks[0].strIngredient12,
          drink.drinks[0].strIngredient13,
          drink.drinks[0].strIngredient14,
          drink.drinks[0].strIngredient15,
        ]);
        setDrinkMeasure([
          drink.drinks[0].strMeasure1,
          drink.drinks[0].strMeasure2,
          drink.drinks[0].strMeasure3,
          drink.drinks[0].strMeasure4,
          drink.drinks[0].strMeasure5,
          drink.drinks[0].strMeasure6,
          drink.drinks[0].strMeasure7,
          drink.drinks[0].strMeasure8,
          drink.drinks[0].strMeasure9,
          drink.drinks[0].strMeasure10,
          drink.drinks[0].strMeasure11,
          drink.drinks[0].strMeasure12,
          drink.drinks[0].strMeasure13,
          drink.drinks[0].strMeasure14,
          drink.drinks[0].strMeasure15,
        ]);
        setDrinkDesc(drink.drinks[0].strInstructions);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Menu />
      <main>
        <section>
          <h1>{drinkName}</h1>
          <h3>Home \ Drinks \ {drinkName} </h3>
        </section>
        <section className='mt-6'>
          <div className='grid gap-4 grid-cols-2'>
            <div className='resultimages'>
              <img src={drinkImage} alt='Logo' />
            </div>
            <div>
              <h4>Glass</h4>
              <p>Serve: {drinkGlass}</p>
              <p>&nbsp;</p>
              <h4>Ingredients</h4>
              <div className='flex'>
                <div className='flex-none'>
                  <ul>
                    {drinkMeasure.map((measure, index) => {
                      return <li>{measure}</li>;
                    })}
                  </ul>
                </div>
                <div className='flex-none'>
                  <ul>
                    {drinkIng.map((ingredient, index) => {
                      return <li>{ingredient}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className='mb-5'></div>
              <h4>Instructions</h4>
              <p>{drinkDesc}</p>
            </div>
          </div>
          <div className='grid gap-4 grid-cols-3 mt-8'>
            <div>
              <img src={instagramlogo} alt='Facebook'></img>
            </div>
            <div>
              <img src={twitterlogo} alt='Twitter'></img>
            </div>
            <div>
              <img src={facebooklogo} alt='Instagram'></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
