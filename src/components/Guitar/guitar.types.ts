export interface IGuitar {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    // quantity: number
  }
  
  export type CartItem = IGuitar & {
    quantity: number
  }

  export type GuitarID = IGuitar['id']
  // export type GuitarID = Pick<IGuitar, 'id'>
  // export interface CartItem extends IGuitar {
  //   quantity: number
  // }

  // export type CartItem = Pick<IGuitar, 'id' | 'name'> & {quantity: number}

  export interface IGuitarProps {
    guitar: IGuitar;
    addToCart: (value: IGuitar) => void
  }