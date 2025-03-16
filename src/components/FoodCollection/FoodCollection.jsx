import { useContext, useState } from "react";
import "./FoodCollection.css";
import { categoryItem } from "../../assets/assets";
import { FoodContext } from "../../context/FoodContext";

function FoodCollection() {
  const { products } = useContext(FoodContext);
  const [category, setCategory] = useState("All");
  return (
    <div>
      <div className="food-container">
        <div className="header-section">
          <h1>Discover Our Menu</h1>
          <hr className="divider" />
        </div>
        <div className="display-container">
          <div className="category-section">
            <h1>Explore Our Categories</h1>
            <ul className="category-list">
              {categoryItem.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setCategory((prev) =>
                        prev == item.category_title
                          ? "All"
                          : item.category_title
                      );
                    }}
                    className={category == item.category_title ? "active" : ""}
                  >
                    {item.category_title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid-display">
            {products.length > 0 ? (
              products
                .filter(
                  (product) => category == "All" || category == product.category
                )
                .map((product) => (
                  <div key={product._id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <h3>{product.name}</h3>
                    <div className="price-add">
                      <p>${product.price}</p>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                ))
            ) : (
              <p>No product is available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCollection;
