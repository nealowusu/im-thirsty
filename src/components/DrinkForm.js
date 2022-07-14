import React from "react";
import drinkselectA from "../img/drinkselect_A.png";

const DrinkForm = ({ selectType, setSelectType }) => {
  return (
    <>
      {selectType &&
        selectType.map((drinks, i) => {
          return (
            <label>
              <input
                type='checkbox'
                name='{drinks.strCategory}'
                value='{drinks.strCategory}'
              />
              <img src={drinkselectA} alt='' />
              <div className='selectlabel'>{drinks.strCategory}</div>
            </label>
          );
        })}
    </>
  );
};

export default DrinkForm;
