import React, { useContext } from "react";
import Banner from "./Banner";
import ProductsContext from "../global/ProductContext";

const Products = () => {
  const { products } = useContext(ProductsContext);
  // console.log(products);
  return (
    <>
      {/* ye map ke callback function se Prodactcontext components 
    se hr ek object ko access krega ..*/}
      <div className="container">
        <Banner />
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt="not found" />
              </div>
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-price">₹{product.price}.00</div>
              </div>
              <div className="add-to-cart">Add to cart</div>
              {product.status === "hot" ? <div className="hot">Hot</div> : ""}
              {product.status === "new" ? <div className="new">New</div> : ""}
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
};
export default Products;
