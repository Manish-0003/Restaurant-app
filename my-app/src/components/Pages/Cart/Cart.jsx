import React from "react";
import "./Cart.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { CartContext } from "../../../CartContext";
import { useNavigate } from "react-router";


const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, clearCart } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>

                    <div className="qty-box">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>

                    <button
                      className="remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total: ₹{total}</h3>

              <button className="clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
