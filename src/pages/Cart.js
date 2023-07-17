import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const selector = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (product) => {
    alert(product.title + " removed from the Cart");
    dispatch(remove(product.id));
  };

  if (selector.cart.length === 0) {
    return (
      <div>
        <h3>Cart</h3>
        <h2>Cart is empty</h2>
      </div>
    );
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {selector.cart?.map((product) => {
          return (
            <div className="cartCard" key={product.id}>
              <img src={product.image} />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
