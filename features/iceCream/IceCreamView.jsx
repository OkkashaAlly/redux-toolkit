import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderIceCream, restockIceCream } from "./iceCreamSlice";

export const IceCreamView = () => {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(orderIceCream(1))}>Buy ice cream</button>
      <button onClick={() => dispatch(restockIceCream(4))}>
        Restock ice creams
      </button>
    </div>
  );
};
