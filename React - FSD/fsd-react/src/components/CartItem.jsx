import { useState } from "react";

const CartItem = ({
  id,
  title,
  description,
  image,
  price,
  addToCart,
  setCart,
  cart,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  function RemoveItem(title) {
    const result = cart.filter((item) => item !== title);
    setCart(result);
    setIsAdded(false);
  }
  return (
    <div key={id} className="child">
      <img src={image} alt={title} style={{ height: "80px", width: "80px" }} />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Corporis, est.
      </p>
      <hr />
      <div className="card price">
        <h4>Price </h4>
        <p>$ {price}</p>
      </div>
      <div className="card price">
        <button
          onClick={() => {
            addToCart(title);
            setIsAdded(true);
          }}
        >
          Add to Cart
        </button>

        {isAdded && (
          <button onClick={() => RemoveItem(title)}>Remove from cart</button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
