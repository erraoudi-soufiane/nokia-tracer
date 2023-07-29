import React, { useState } from "react";
import "./Categories.css";

function Categories({ setSelectedCategory }) {
  const categories = [
    "network",
    "End",
    "Comoponents",
    "connections",
    "Miscella",
    "Multiuser",
  ];

  const [selectedItem, setSelectedItem] = useState("1");

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          onClick={() => {
            setSelectedCategory(category);
            setSelectedItem(index);
          }}
          className={
            selectedItem === index ? "category__img active" : "category__img"
          }
        >
          {category}{" "}
        </button>
      ))}
    </div>
  );
}

export default Categories;
