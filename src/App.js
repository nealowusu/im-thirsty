import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Drink from "./routes/Drink";
import Select from "./routes/Select";
import { MenuContextProvider } from "./context/MenuContext";

function App() {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<Select />} />
          <Route path='/drink/:id' element={<Drink />} />
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
