import React, { useEffect, useState } from "react";
import Select from "react-select";

const GlassType = ({ glassSelect, setGlassSelect }) => {
  const [glassOptions, setGlassOptions] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
        );
        const glasslist = await response.json();
        setGlassOptions(glasslist.drinks);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);

  const listGlasses =
    glassOptions &&
    glassOptions.map((glass, i) => {
      return {
        value: glass.strGlass,
        label: glass.strGlass,
      };
    });

  const selectGlasses = (e) => {
    setGlassSelect(e.value);
  };

  return (
    <>
      <Select
        options={listGlasses}
        onChange={(e) => {
          selectGlasses(e);
        }}
      />
    </>
  );
};

export default GlassType;
