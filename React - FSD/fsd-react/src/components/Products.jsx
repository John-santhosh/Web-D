import { useState } from "react";
import data from "./data";
import CartItem from "./CartItem";

let Products = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };
  return (
    <div>
      <h2 className="title">Products Component</h2>
      <h3 className="title">No of products in cart: {cart.length}</h3>
      <h3>Items in the Cart : {cart.join(" ")}</h3>
      <hr />
      <div className="card">
        {data.map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              addToCart={addToCart}
              setCart={setCart}
              cart={cart}
            ></CartItem>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
