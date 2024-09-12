import { Dispatch } from "react";
import { ICartState } from "../../types";
// import { GuitarID } from "../Guitar/guitar.types";
import { CartActions } from "../../reducers/cartReducer.types";

export interface IHeaderProps {
    cart: ICartState;
    dispatch: Dispatch<CartActions>;
    // removeFromCart: (value: GuitarID) => void;
    // increaseQuantity: (value: GuitarID) => void;
    // decreaseQuantity: (value: GuitarID) => void;
    // cleanCart: () => void;
    // cartTotal: number;
    // isEmpty: boolean;
}