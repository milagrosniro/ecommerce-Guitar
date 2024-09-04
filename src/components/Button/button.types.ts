import { IGuitar } from "../Guitar/guitar.types";

export interface IButtonProps {
    title: string;
    handleClick: (value: IGuitar) => void;   
    item: IGuitar
}