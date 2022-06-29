import React from "react";
import { useNavigate } from "react-router-dom";

const DrinkForm = ({ selectType, setSelectType }) => {
  let navigate = useNavigate();
  const drinkOutput = (e) => {
    e.stopPropagation();
    navigate("/drink/11007");
  };

  return (
    <>
      <h1>Select</h1>
      <form>
        <select>
          {selectType &&
            selectType.map((drinks, i) => {
              return (
                <option value='{drinks.strCategory}'>
                  {drinks.strCategory}
                </option>
              );
            })}
        </select>
        <p></p>
        <button onClick={(e) => drinkOutput(e)}>What Should I Drink</button>
      </form>

      <p></p>
      <a href=' ' onClick={(e) => drinkOutput(e)}>
        Or Suprise Me?
      </a>
    </>
  );
};

export default DrinkForm;
