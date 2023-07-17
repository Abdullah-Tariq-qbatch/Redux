import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const SelectProduct = () => {
  const selector = useSelector((state) => state.selectedProduct);
  return (
    <div>
      <h3>{selector.title}</h3>
    </div>
  );
};

export default SelectProduct;
