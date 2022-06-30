import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/Header";
// // import Cart from "./component/cart/Cart";
// import Home from "./components/home/Home";
// import { getData } from "./context/action";
// import { useEffect } from "react";
// import { useCart } from "./context/Context";
// import { actionTypes } from "./constants/actionType";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import User from "./components/user/User";
// import { useUser } from "./context/UserContext";
function App() {
  // const { productDispatch } = useCart();
  // useEffect(() => {
  //   getData().then((prod) =>
  //     productDispatch({
  //       type: actionTypes.SET_PRODUCTS_DATA,
  //       payload: prod,
  //     })
  //   );
  // }, []);
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route exact path="/home" element={<Home />} />
          <Route exact path="/user" element={<User />} /> */}

          {/* <Route exact path="/cart" element={<Cart />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
