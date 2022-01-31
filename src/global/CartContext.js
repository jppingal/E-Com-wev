import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

// useReducer actule me two Arguments leta hai first leta hai Reducer function
// jo hamne import kiya hai and second initial State / intial value
// initial state ek intger bhi ho sakata hai object bhi ho sakata hai
// String bhi ho sakataa hai and Array bhi ho sakata hai.
// useReducer hame two things return krta hai
// first actual varible (cart)  or object ko ham varibal(cart) ke andar store krenge& dusra
// Dispatch function
// Dispatch function ke thru ek call krenge cartReducer ko.
// createContex se provider hame milega.
export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  });
  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
