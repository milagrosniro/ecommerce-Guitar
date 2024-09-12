import { CartItem } from "../components/Guitar/guitar.types";
import { maxItems, minItems } from "../constants";
import { db } from "../db";
import { CartActions, IInitialCartState } from "./cartReducer.types";

export const initialCartState = () => {
  const localStorageCart = localStorage.getItem("cart");
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const initialState: IInitialCartState = {
  cart: initialCartState(),
  data: db
};

export const cartReducer = (
  state: IInitialCartState = initialState,
  action: CartActions
) => {
  switch (action.type) {

    case "removeFromCart": {
      const cartsFiltered = [...state.cart].filter(
        (elem) => elem.id !== action.payload.id
      );
      return { ...state, cart: cartsFiltered };
    }

    case "decreaseQuantity": {
      const uploadedCarts = state.cart.map((cart) =>
        cart.id === action.payload.id && cart.quantity > minItems
          ? { ...cart, quantity: cart.quantity - 1 }
          : cart
      );
      return { ...state, cart: uploadedCarts };
    }

    case "increaseQuantity": {
      const uploadedCarts = state.cart.map((cart) =>
        cart.id === action.payload.id && cart.quantity < maxItems
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      );
      return { ...state, cart: uploadedCarts };
    }

    case "cleanCart":
      return { ...state, cart: [] };
      
      case "addToCart": {
        const itemExist = state.cart.find(
          (elem) => elem.id === action.payload.guitar.id
        );
        
        let updatedCart: CartItem[] = [];
      
        if (itemExist) {
          updatedCart = state.cart.map(item => {
            if (item.id === action.payload.guitar.id) {
              return item.quantity < maxItems ? { ...item, quantity: item.quantity + 1 } : item;
            } else {
              return item;
            }
          });
        } else {
          const newItem: CartItem = { ...action.payload.guitar, quantity: 1 };
          updatedCart = [...state.cart, newItem];
        }
      
        return { ...state, cart: updatedCart };
      }

    // case "addToCart": {
      
    //   const itemExist = state.cart.find(
    //     (elem) => elem.id === action.payload.guitar.id
    //   );
    //   console.log(itemExist)
    //   let updatedCart : CartItem[] = []
    //   if (itemExist) {
    //     console.log(itemExist)
    //      updatedCart = state.cart.map(item=>{
    //       if(item.id === action.payload.guitar.id){
    //         return item.quantity < maxItems ? {...item, quantity: item.quantity + 1 } : item
    //       }else{return item}
    //      })
    //   } else {
    //     const newIten : CartItem = {...action.payload.guitar, quantity: 1}
    //     return { ...state, cart: [...state.cart, newIten] };
    //   }
    // };

    default:
      return state;
  }
};
