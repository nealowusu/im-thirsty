import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Drink from "./routes/Drink";
import List from "./routes/List";

function App() {
  // creating state managers for the most global values;

  const [listPage, setListPage] = useState(null);
  const [resultOutputs, setResultOutputs] = useState();

  return (
    // routes for to define all the links to the page, and all the appropriate props
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              listPage={listPage}
              setListPage={setListPage}
              resultOutputs={resultOutputs}
              setResultOutputs={setResultOutputs}
            />
          }
        />
        <Route
          path='/list'
          element={
            <List
              listPage={listPage}
              setListPage={setListPage}
              resultOutputs={resultOutputs}
              setResultOutputs={setResultOutputs}
            />
          }
        />
        <Route
          path='/drink/:id'
          element={
            <Drink
              listPage={listPage}
              setListPage={setListPage}
              resultOutputs={resultOutputs}
              setResultOutputs={setResultOutputs}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
