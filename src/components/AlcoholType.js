import React, { useState } from "react";
import Switch from "react-switch";

const AlcoholType = ({ alcoholSelect, setAlcoholSelect }) => {
  const [toggle, setToggle] = useState(true);
  const toggleChange = (e) => {
    setToggle((prevToggle) => !prevToggle);
    if (toggle === true) {
      setAlcoholSelect("Alcoholic");
    } else {
      setAlcoholSelect("Non_alcoholic");
    }
    console.log(alcoholSelect);
  };
  return (
    <>
      <Switch checked={toggle} onChange={toggleChange} />
    </>
  );
};

export default AlcoholType;
