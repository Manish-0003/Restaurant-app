import React from "react";
import "./Gallery.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import img1 from "../../../assets/chef.jpeg";
import img2 from "../../../assets/about2.jpeg";
import img3 from "../../../assets/about.jpeg";
import img4 from "../../../assets/burger.jpeg";
import img5 from "../../../assets/masala_dosa.jpeg";

import img6 from "../../../assets/dishes.jpeg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section className="gallery-section">
        <h1>Our Gallery</h1>
        <p>Take a glimpse of our delicious dishes and cozy ambiance.</p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`dish-${index}`} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;