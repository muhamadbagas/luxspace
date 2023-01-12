import "./assets/css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Success from "pages/Success";
import NotFound from "pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/categories/:idcategory" element={<Details />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
