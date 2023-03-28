import React from "react";
// import { useAppDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { orderIceCream, restockIceCream } from "./iceCreamSlice";

export const IceCreamView = () => {
  const numOfIceCreams = useAppSelector(state => state.iceCream.numOfIceCream);
  const dispatch = useAppDispatch();

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
