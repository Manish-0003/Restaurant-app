import React from "react";
import "./CheckOut.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../../CartContext";

const CheckOut = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const cgst = subtotal * 0.025;
  const sgst = subtotal * 0.025;
  const total = subtotal + cgst + sgst;

  const placeOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all details");
      return;
    }

    clearCart();
    navigate("/order-success", { state: { image: cart[0].image } });
  };
  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <h2>Checkout</h2>

        <div className="checkout-grid">
          <div className="checkout-left">
            <h3>Customer Details</h3>

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={customer.name}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
            />

            <textarea
              placeholder="Delivery Address"
              name="address"
              value={customer.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="checkout-right">
            <h3>Order Summary</h3>

            <div className="summary-items">
              {cart.map((item) => (
                <div className="summary-card" key={item.id}>
                  <p>
                    {item.name} × {item.qty}
                  </p>
                  <p>₹{item.price * item.qty}</p>
                </div>
              ))}
            </div>

            <div className="summary-total">
              <p>
                Subtotal: <b>₹{subtotal}</b>
              </p>
              <p>
                CGST (2.5%): <b>₹{cgst.toFixed(2)}</b>
              </p>
              <p>
                SGST (2.5%): <b>₹{sgst.toFixed(2)}</b>
              </p>
              <hr />
              <p className="grand">
                Grand Total: <b>₹{total.toFixed(2)}</b>
              </p>
            </div>

            <button className="order-btn" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
