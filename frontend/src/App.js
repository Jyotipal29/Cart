import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
// import Cart from "./component/cart/Cart";
import Home from "./components/home/Home";
import { getData } from "./context/action";
import { useEffect } from "react";
import { useCart } from "./context/Context";
import { actionTypes } from "./constants/actionType";
function App() {
  const { productDispatch } = useCart();
  useEffect(() => {
    getData().then((prod) =>
      productDispatch({
        type: actionTypes.SET_PRODUCTS_DATA,
        payload: prod,
      })
    );
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/cart" element={<Cart />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
