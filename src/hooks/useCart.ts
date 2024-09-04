import { useEffect, useMemo, useState } from "react";
import { db } from "../db";
import { CartItem, GuitarID, IGuitar } from "../components/Guitar/guitar.types";
import { ICartState, IDataState } from "../types";

const useCart = () => {
  const initialCartState = () =>{
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data, setData] = useState<IDataState>([]);
  const [cart, setCart] = useState<ICartState>(initialCartState());

  const maxItems = 5;
  const minItems = 1;

  useEffect(() => {
    setData(db);
  }, []);

  useEffect(() => {
    saveLocalStorage();
  }, [cart]);

  const saveLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (id: GuitarID) => {
    const cartsFiltered = [...cart].filter((elem) => elem.id !== id);
    setCart(cartsFiltered);
  };

  const decreaseQuantity = (id: GuitarID) => {
    const uploadedCarts = cart.map((cart) =>
      cart.id === id && cart.quantity > minItems
        ? { ...cart, quantity: cart.quantity - 1 }
        : cart
    );
    setCart(uploadedCarts);
  };

  const increaseQuantity = (id: GuitarID) => {
    const uploadedCarts = cart.map((cart) =>
      cart.id === id && cart.quantity < maxItems
        ? { ...cart, quantity: cart.quantity + 1 }
        : cart
    );
    setCart(uploadedCarts);
  };

  const cleanCart = () => setCart([]);

  const addToCart = (item: IGuitar) =>{
    const itemAdded = cart.findIndex(elem => elem.id === item.id) 
    
    if(itemAdded === -1){
      const newItem : CartItem = {...item, quantity: 1} 
      setCart([...cart, newItem])
    }else{
      const updateCart = [...cart];
      updateCart[itemAdded].quantity++
      setCart(updateCart)
    }

  }
  const isEmpty = useMemo(() => cart.length === 0, [cart]) 
  const cartTotal =useMemo(() => cart.reduce((total, item)=> total + (item.quantity * item.price),0), [cart])

  return{
    cart,
    setCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    data,
    setData,
    addToCart,
    isEmpty,
    cartTotal
  }
}

export default useCart