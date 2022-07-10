import "./styles/Layout.css";
import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import Banner from "./components/Banner.js";
import CartPreview from "./components/CartPreview.js";
import ShoppingList from "./components/ShoppingList.js";
import Footer from "./components/Footer.js";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(
    () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart]
  );

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>

      <div className="lmj-layout-inner">
        <CartPreview isOpen={isOpen} setIsOpen={setIsOpen} cart={cart} updateCart={updateCart} />

        <ShoppingList setIsOpen={setIsOpen} cart={cart} updateCart={updateCart} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
