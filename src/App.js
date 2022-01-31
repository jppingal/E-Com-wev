import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { ProductContextProvider } from "./global/ProductContext";
import NotFound from "./components/NotFound";
import { CartContextProvider } from "./global/CartContext";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </CartContextProvider>
    </ProductContextProvider>
  );
};
export default App;
