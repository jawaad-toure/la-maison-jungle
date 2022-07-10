import '../styles/CartPreview.css';
import { useEffect } from 'react';

function Cart({ isOpen, setIsOpen, cart, updateCart }) {

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    document.title = `React Learning - Cart total amount : ${total}€`;
  }, [total]);

  function emptyCart() {
    updateCart([]);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function openCart() {
    setIsOpen(true);
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-btn-fermer" onClick={closeCart} >
        Fermer
      </button>

      {
        cart.length > 0 ? (
          <div>
            <h2>Panier</h2>

            <ul>
              {
                cart.map(( {name, price, amount}, index) => (
                    <div key={`${name}-${index}`}>
                      {name} : {price}€ x {amount}
                    </div>
                  )
                )
              }
            </ul>

            <h3>Total : {total}€</h3>

            <button className="lmj-cart-btn-vider-le-panier" onClick={emptyCart}>
              Vider le panier
            </button>
          </div>
        ) : (
          <div>Votre panier est vide !</div>
        )
      }
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={openCart}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}
export default Cart;

// function handleInitializeValue(event) {
//     updateCart( event.target.textContent === "Vider le panier" && [] );
// }

// function handleOpen(event) {
//     setIsOpen(event.target.textContent === "Fermer" ? false : true);
// }
