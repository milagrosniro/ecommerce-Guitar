import { GuitarID, IGuitar } from "../components/Guitar/guitar.types";
import { ICartState, IDataState } from "../types";

export interface IInitialCartState {
    cart: ICartState,
    data: IDataState,
}

export type CartActions = 
{type:'removeFromCart', payload: {id:GuitarID} } |
{type:'decreaseQuantity', payload: {id:GuitarID} } |
{type:'increaseQuantity', payload: {id:GuitarID} } |
{type:'cleanCart'} | 
{type:'addToCart', payload: {guitar: IGuitar}} 



