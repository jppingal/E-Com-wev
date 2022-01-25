import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import {ProductContextProvider } from "./global/ProductContext";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <ProductContextProvider>
    <Router>
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Router>
      </ProductContextProvider>
  )
}
export default App;
