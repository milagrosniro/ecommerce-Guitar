import { ICartState } from "../../types";
import { GuitarID } from "../Guitar/guitar.types";

export interface IHeaderProps {
    cart: ICartState;
    removeFromCart: (value: GuitarID) => void;
    increaseQuantity: (value: GuitarID) => void;
    decreaseQuantity: (value: GuitarID) => void;
    cleanCart: () => void;
    cartTotal: number;
    isEmpty: boolean;
}