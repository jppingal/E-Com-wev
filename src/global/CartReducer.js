export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  switch (action.type) {
    case "ADD_TO_CART":
      // console.log('add to cart case');
      // find loop chalayega shoppingCart me jo bhi values ho
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }
      break;
    case "INC":
      product = action.cart;
      product.qty = product.qty + 1;
      updatedPrice = totalPrice + product.price;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalPrice - product.price;
        updatedQty = qty - 1;
        index = shoppingCart.findIndex((cart) => cart.id === action.id);
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return state;
      }
      break;
    case "DELETE":
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updatedQty = qty - product.qty;
      updatedPrice = totalPrice - product.price * product.qty;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    default:
      return state;
  }
};
// cardReducer function Two Arguments Recive krta hai ek hota hai initial state
// ye  object'{shoppingCart: [], totalPrice: 0, Qty: 0})'jo cartContext  me hai
// yaha pe jo bhi ho automatic hi State ke thru aata haiand dusara Action
// ye  onClick={() =>dispatch({type: "ADD_TO_CART"}) jo Product.js me hai
