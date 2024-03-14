import React, { useContext } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import { CartContext } from "./Context";


faker.seed(100);
const Home = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="productContainer">
      {products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id} />;
      })}
    </div>
  );
};

export default Home;
