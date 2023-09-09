import React, { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../Pages/ShoppingCart/ShoppingCart";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContextType = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCart must be used within a ShoppingCartProvider.");
  }
  return context;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>(
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        currItems[itemIndex].quantity += 1;
      } else {
        currItems.push({ id, quantity: 1 });
      }
      return [...currItems];
    });
  }
  
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        if (currItems[itemIndex].quantity === 1) {
          currItems.splice(itemIndex, 1); 
        } else {
          currItems[itemIndex].quantity -= 1;
        }
      }
      return [...currItems];
    });
  }
  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }


  
  

  return (
    <ShoppingCartContext.Provider
      value={{   getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity, }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
