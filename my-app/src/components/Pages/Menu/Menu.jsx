import React from "react";
import "./Menu.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useContext, useState, useEffect } from "react";
import menuData from "./MenuData";
import { CartContext } from "../../../CartContext";

const Menu = () => {
  const categories = ["All", ...new Set(menuData.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(menuData);

  const [visibleCount, setVisibleCount] = useState(8);
  const [cart, setCart] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(menuData);
    } else {
      setFilteredItems(
        menuData.filter((item) => item.category === activeCategory)
      );
    }
    setVisibleCount(8);
  }, [activeCategory]);
  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };
  return (
    <>
      <Navbar />
      <div className="menu-container">
        <div className="cart-badge"></div>
        <h2 className="menu-title">Our Menu</h2>

        <div className="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.slice(0, visibleCount).map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-img" />

              <div className="menu-info">
                <h3>{item.name}</h3>
                <p className="desc">{item.description}</p>

                <div className="menu-bottom">
                  <span className="price">₹{item.price}</span>
                  <button className="add-btn" onClick={() => addToCart(item)}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredItems.length && (
          <div className="load-more-wrapper">
            <button className="load-more-btn" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Menu;
