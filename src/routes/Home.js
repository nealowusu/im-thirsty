import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  let navigate = useNavigate();
  const startDrinkSelect = (e) => {
    e.stopPropagation();
    navigate("/list");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={(e) => startDrinkSelect(e)}>Tell Me My Drink</button>
    </>
  );
};

export default Home;
