import React, { createContext } from "react";
import {useLocalStorage} from '../hooks/LocalStorage';

export const CartItemContext = createContext();

export const CartItemProvider = ({children}) => {

    const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
    
    const onAdd = (product) => {
    const exist = cartItems.find((x) => x.uuid === product.uuid);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.uuid === product.uuid ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.uuid === product.uuid);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.uuid !== product.uuid));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.uuid === product.uuid ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
    
  return (
    <> 
        <CartItemContext.Provider value={{cartItems, onAdd, onRemove }}>
            {children}      
        </CartItemContext.Provider> 
    </>
)
  
}
