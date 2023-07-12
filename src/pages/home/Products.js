import React from "react";

import pimg1 from "../../assets/products/image 20.png";
import pimg2 from "../../assets/products/image 21.png";
import pimg3 from "../../assets/products/image 22.png";
import pimg4 from "../../assets/products/image 24.png";
import pimg5 from "../../assets/products/image 26.png";
import pimg6 from "../../assets/products/image 27.png";
import pimg7 from "../../assets/products/image 28.png";
import pimg8 from "../../assets/products/image 29.png";
import pimg9 from "../../assets/products/image 29.png";
import Product from "../../components/Product";

export const PRODUCTS = [
  {
    title: "Nescafe Coffee",
    off: "25",
    category: "Beverages",
    sellPrice: "4.50",
    price: "3.99",
    image: pimg1,
  },
  {
    title: "Giffy Concentrated Dishwash Gel",
    off: "25",
    category: "Meat & Seafood",
    sellPrice: "11.35",
    price: "3.99",
    image: pimg2,
  },
  {
    title: "Eveready LED Bulb - 9 Watt",
    off: "25",
    category: "Fruits & Vegetables",
    sellPrice: "18.21",
    price: "3.99",
    image: pimg3,
  },
  {
    title: "Blue Diamond Almonds Lightly",
    off: "25",
    category: "Grocery & Staples",
    sellPrice: "49.99",
    price: "3.99",
    image: pimg4,
  },
  {
    title: "Nescafe Original Coffee",
    off: "25",
    category: "Breakfast & Dairy",
    sellPrice: "11.35",
    price: "3.99",
    image: pimg5,
  },
  {
    title: "Nescafe Original Coffee",
    off: "25",
    category: "Breakfast & Dairy",
    sellPrice: "11.35",
    price: "3.99",
    image: pimg6,
  },
  {
    title: "Nescafe Original Coffee",
    off: "25",
    category: "Breakfast & Dairy",
    sellPrice: "11.35",
    price: "3.99",
    image: pimg7,
  },
  {
    title: "Nescafe Original Coffee",
    off: "25",
    category: "Breakfast & Dairy",
    sellPrice: "11.35",
    price: "3.99",
    image: pimg8,
  },
  {
    title: "Nescafe Original Coffee",
    off: "25",
    category: "Breakfast & Dairy",
    sellPrice: "11.35",
    price: "3.99",
    image: pimg9,
  },
];
const Products = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PRODUCTS.map((pr) => (
          <Product product={pr} key={pr?.title} />
        ))}
      </div>
    </>
  );
};

export default Products;
