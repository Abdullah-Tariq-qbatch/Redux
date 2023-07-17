import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { select } from "../store/selectedSlice";
import { STATUSES } from "../store/productSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.product);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    alert(product.title + " added to the Cart");
    dispatch(add(product));
  };

  const handleSelect = (product) => {
    navigate("/select-product"); // select page
    dispatch(select(product));
  };

  if (selector.status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (selector.status === STATUSES.ERROR) {
    return <h2>Something went wrong.</h2>;
  }

  return (
    <div className="productsWrapper">
      {selector.data?.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4
              className="productTitle"
              onClick={() => handleSelect(product)}
              style={{}}
            >
              {product.title}
            </h4>
            <h5>${product.price}</h5>
            <button className="btn" onClick={() => handleAdd(product)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
