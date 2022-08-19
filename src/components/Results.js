import React, { useEffect } from "react";
import "./Results.css";
import Menu from "./Menu";
import resultIMG from "../img/result_image_template.jpeg";

const Results = ({
  listPage,
  setListPage,
  resultOutputs,
  setResultOutputs,
}) => {
  useEffect(() => {
    console.log(resultOutputs);
  }, [resultOutputs]);
  return (
    <>
      <Menu />
      <main>
        <section>
          <h1>Results</h1>
          <div className='grid gap-4 grid-cols-2'>
            <div className='Results'>
              <div className='static'>
                <img src={resultIMG} alt='Result'></img>
                <div className='relative bottom-9 left-1.5'>
                  <div>
                    <h3>Blood Orange Wine</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='Results'>
              <img src={resultIMG} alt='Result'></img> Test
            </div>
            <div className='Results'>
              <img src={resultIMG} alt='Result'></img> Test
            </div>
            <div className='Results'>
              <img src={resultIMG} alt='Result'></img> Test
            </div>
          </div>
        </section>
        <section className='grid place-content-center mt-12 '>
          <div>
            <button className='button'>
              <span className='buttonCTA'>Load More</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Results;
