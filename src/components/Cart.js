import React, { useContext } from "react";
import { CartContext } from "../global/CartContext";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  console.log(shoppingCart);
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0 ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart_image">
                  <img src={cart.image} alt="not found" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">₹{cart.price}.00</span>
                <span
                  className="inc"
                  onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
                >
                  <i className="fas fa-plus"></i>
                </span>
                <span className="product_quantity">{cart.qty}</span>
                <span
                  className="dec"
                  onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                >
                  <i className="fas fa-minus"></i>
                </span>
                <span className="product-total-price">
                  ₹{cart.price * cart.qty}.00
                </span>
                <span
                  className="delete-product"
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.id, cart })
                  }
                >
                  <i className="fas fa-trash-alt"></i>
                </span>
              </div>
            ))
          : <h2 style={{textAlign:"center", color:"#f7854f"}}>Sorry your cart is currently empty..!</h2>}
      </div>
      {shoppingCart.length > 0 ? 
        <div className="cart-summery">
          <div className="summery">
            <h3>Cart Summery</h3>
            <div className="total-items">
              <div className="items">Total Items</div>
              <div className="items-count">{qty}</div>
            </div>
            <div className="total-price-section">
              <div className="just-title">Total Price</div>
              <div className="items-price">₹{totalPrice}.00</div>
            </div>
            <div className="stripe-section">
              <StripeCheckout
              stripekey="jp_test_jp"
              // token={handleToken}
              shippingAddress
              amount={totalPrice * 100}
              name="All Products"
              >
              </StripeCheckout>
            </div>
          </div>
        </div> : "" }
    </div>
  );
};
export default Cart;
