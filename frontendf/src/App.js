import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./screens/Home";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./screens/Cart";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/BackDrop";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} />
        <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
        {/* backdrop */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        {/* home  */}
        {/* product */}
        {/* cart screen */}
      </div>
    </Router>
  );
}

export default App;
