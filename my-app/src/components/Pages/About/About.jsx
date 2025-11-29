import React from "react";
import "./About.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <section className="about-main">
          <div className="about-text">
            <h2>About FoodFusion</h2>
            <p>
              At FoodFusion, we mix traditional cooking with new ideas to make
              tasty and unique food. We always use fresh ingredients, real
              flavors, and friendly service to give you the best experience.
            </p>
            <p>
              Our restaurant is built on the idea that good food connects
              people. Every dish tells a story — cooked with passion, served
              with love.
            </p>
          </div>

          <div className="about-img">
            <img src="/images/about-restaurant.jpg" alt="Restaurant" />
          </div>
        </section>

        <section className="chef-section">
          <h2>Meet Our Master Chef</h2>

          <div className="chef-card">
            <img src="/images/chef.jpg" alt="Chef" className="chef-img" />

            <div className="chef-info">
              <h3>Chef Aarav Mehta</h3>
              <p>
                With 15+ years of culinary expertise, Chef Aarav brings
                world-class flavors to every dish. His signature recipes blend
                Indian spices with international techniques, creating
                unforgettable meals.
              </p>

              <ul>
                <li>⭐ Experience in 5-star luxury hotels</li>
                <li>⭐ Specialized in Indian, Italian & Thai cuisine</li>
                <li>⭐ Awarded “Best Chef of the Year – 2023”</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="why-us">
          <h2>Why Choose Us?</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>Fresh Ingredients</h3>
              <p>
                We handpick the freshest ingredients to ensure premium quality.
              </p>
            </div>

            <div className="why-card">
              <h3>Authentic Recipes</h3>
              <p>Original recipes prepared with passion by our expert chefs.</p>
            </div>

            <div className="why-card">
              <h3>Cozy Ambience</h3>
              <p>
                A relaxing, beautifully designed space made for great memories.
              </p>
            </div>

            <div className="why-card">
              <h3>Fast Service</h3>
              <p>Quick service without compromising taste or quality.</p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            To serve food that brings a smile. We aim to create a dining
            experience where every guest feels at home. With quality,
            cleanliness, and innovation — our mission is to be the best
            restaurant in the city.
          </p>
        </section>

        <section className="highlights">
          <div className="highlight-card">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="highlight-card">
            <h3>50,000+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="highlight-card">
            <h3>100+</h3>
            <p>Unique Dishes Served</p>
          </div>

          <div className="highlight-card">
            <h3>4.9★</h3>
            <p>Average Rating</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
