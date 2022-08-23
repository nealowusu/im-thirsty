import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Results.css";
import Menu from "./Menu";
import resultIMG from "../img/result_image_template.jpeg";

const Results = ({
  listPage,
  setListPage,
  resultOutputs,
  setResultOutputs,
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    console.log(resultOutputs);
  }, [resultOutputs]);

  const [visible, setVisible] = useState(8);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <>
      <Menu />
      <main>
        <section>
          <h1>Results</h1>
          <div className='grid gap-4 grid-cols-2'>
            {resultOutputs?.slice(0, visible).map((results) => (
              <div className='Results'>
                <a href={`drink/${results.idDrink}`}>
                  <div className='static'>
                    <img src={results.strDrinkThumb} alt='Result'></img>
                    <div>
                      <div>
                        <h3>{results.strDrink}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className='grid place-content-center mt-12 '>
          <div>
            <button className='button'>
              <span className='buttonCTA' onClick={showMoreItems}>
                Load More
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Results;
