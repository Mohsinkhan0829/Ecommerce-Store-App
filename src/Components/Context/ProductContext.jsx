import { createContext, useState } from "react";
import AllProductsData from "./AllProductsData";

export const AllProducts = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < AllProductsData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const AllProductsContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getToatalCartItems = ()=>{
    let totalItem  =  0;
    for(const item in cartItem){
        if(cartItem[item]>0){
            totalItem+= cartItem[item]
        }
    }
    return totalItem
  }
  const contextValue = { getToatalCartItems,AllProductsData, cartItem, addToCart, removeFromCart };

  console.log(cartItem);

  return (
    <AllProducts.Provider value={contextValue}>
      {props.children}
    </AllProducts.Provider>
  );
};

export default AllProductsContextProvider;
