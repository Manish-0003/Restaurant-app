import React from "react";
import "./OrderSuccess.css";
import { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useNavigate, useLocation } from "react-router";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderedImage =
    state?.image || "https://cdn-icons-png.flaticon.com/512/1046/1046784.png";

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 10000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <Navbar />
      <div className="success-container">
        <div className="success-card">
          <div className="checkmark-animation">
            <span className="checkmark"> Checked</span>
          </div>
          <img
            src={orderedImage}
            alt="Ordered food"
            className="ordered-food-img"
          />
          <h2>Order Placed Successfully</h2>
          <p>Food is being Prepared</p>
          <p>Thank You for ordering with us</p>
          <button onClick={() => navigate("/")}>Return To Home</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccess;
