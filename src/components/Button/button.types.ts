import { Dispatch } from "react";
import { CartActions } from "../../reducers/cartReducer.types";
import { IGuitar } from "../Guitar/guitar.types";

export interface IButtonProps {
    title: string;
    // handleClick: (value: IGuitar) => void;   
    dispatch: Dispatch<CartActions>;
    item: IGuitar
}