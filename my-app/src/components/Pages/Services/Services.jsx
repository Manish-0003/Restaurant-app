import React from "react";
import "./Services.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            We offer a wide range of premium services designed to give you the
            best dining and food experience.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <img src="" alt="dine-in" />
            <h3>Dine-In Experience</h3>
            <p>
              Enjoy a warm and cozy dine-in experience with premium hospitality.
            </p>
          </div>

          <div className="service-card">
            <img src="" alt="Delivery" />
            <h3>Fast Home Delivery</h3>
            <p>Hot, fresh, and fast food delivered right to your doorstep.</p>
          </div>

          <div className="service-card">
            <img src="" alt="Reservation" />
            <h3>Online Table Reservation</h3>
            <p>Book your table online and avoid the waiting time.</p>
          </div>

          <div className="service-card">
            <img src=" " alt="Catering" />
            <h3>Catering Services</h3>
            <p>Perfect catering for weddings, parties, and corporate events.</p>
          </div>

          <div className="service-card">
            <img src=" " alt="Events" />
            <h3>Event Hosting</h3>
            <p>
              We host birthday parties, anniversaries, and small gatherings.
            </p>
          </div>

          <div className="service-card">
            <img src="" alt="Takeaway" />
            <h3>Easy Takeaway</h3>
            <p>Quick takeaway service for customers on the go.</p>
          </div>
        </div>

        <section className="special-features">
          <h2>What Makes Us Special?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Premium Quality</h3>
              <p>Fresh ingredients and top-grade cooking techniques.</p>
            </div>

            <div className="feature-card">
              <h3>Best Hospitality</h3>
              <p>Friendly staff and quick service for every customer.</p>
            </div>

            <div className="feature-card">
              <h3>Affordable Pricing</h3>
              <p>Delicious food at pocket-friendly prices.</p>
            </div>
          </div>
        </section>

        <section className="process-section">
          <h2>How We Serve You</h2>

          <div className="process-flow">
            <div className="process-step">
              <span>1</span>
              <h3>You Order</h3>
              <p>Choose your favorite dishes and place the order.</p>
            </div>

            <div className="process-step">
              <span>2</span>
              <h3>We Prepare</h3>
              <p>Our chefs prepare food with care and perfection.</p>
            </div>

            <div className="process-step">
              <span>3</span>
              <h3>Delivered to You</h3>
              <p>Your food arrives hot, fresh, and right on time.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Services;
