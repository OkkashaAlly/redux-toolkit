import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCake, restockCake } from "./cakeSlice";

export const CakeView = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(orderCake(1))}>Buy cake</button>
      <button onClick={() => dispatch(restockCake(4))}>Restock cakes</button>
    </div>
  );
};
