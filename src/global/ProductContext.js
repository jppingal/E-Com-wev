import React, { createContext, useState } from "react";
import camera from "..//images/camera.jpg";
import degitalcamera from "../images/degitalcamera.jpg";
import glass from "../images/glass.jpg";
import headphone from "../images/headphone.jpg";
import iphone from "../images/iphone.jpg";
import macLaptop from "../images/macLaptop.jpg";
import microphone from "../images/microphone.jpg";
import ring from "../images/ring.jpg";
import watch from "../images/watch.jpg";
import shoes from "../images/shoes.jpg";
import perfume from "../images/perfume.jpg";
import whiteshoes from "../images/whiteshoes.jpg";
import { Component } from "react/cjs/react.development";

const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [products] = useState(
    // is products ke andar hamare ye hol array hai agar ye hol array
    // access krna hai to ham access krenge ye [products] or ye hame ek function return
    // krta hai useState or is function ke thru ham is array ke objects ko ham
    // Products component me map mathod se  access kr sakte hai
    [
      {id: 1, name: "Camera", price: 1100, image: camera, status: "hot",},
      {id: 2, name: "Glass", price: 1100, image: glass, status: "hot" },
      {id: 3, name: "Head Phone", price: 1500, image: headphone, status: "new",},
      {id: 4, name: "iPhone", price: 45000, image: iphone, status: "new" },
      {id: 5, name: "Mac Laptop", price: 75000, image: macLaptop, status: "hot",},
      {id: 6, name: "Micro Phone", price: 4500, image: microphone, status: "new",},
	  {id: 7, name: "Digital Camera", price: 2500, image: degitalcamera, status: "hot",},
      {id: 8, name: "Ring", price: 500, image: ring, status: "hot"},
      {id: 9, name: "Watch", price: 900, image: watch, status: "hot"},
      {id: 10, name: "Shoes", price: 1100, image: shoes, status: "hot"},
      {id: 11, name: "Perfume", price: 1100, image: perfume, status: "hot"},
      {id: 12, name: "White Shoes", price: 1100, image: whiteshoes, status: "hot",},
    ]
  );

  return (
    // ye child Component ke ye data jo array me hai provide krwata hai
    <ProductContext.Provider
      value={{
        products: [...products],
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
