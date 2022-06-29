import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Select from "./routes/Select";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<Select />} />
        <Route path='/drink/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
