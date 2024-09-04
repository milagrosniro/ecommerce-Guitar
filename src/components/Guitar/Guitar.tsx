
import Button from '../Button';
import { IGuitarProps } from './guitar.types';

const Guitar = ({guitar, addToCart}: IGuitarProps) => {

  const { name, description, image, price} = guitar

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
    <div className="col-4">
        <img className="img-fluid" src={`/img/${image}.jpg`} alt='guitar image' />
    </div>
    <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price} </p>
        <Button title={'Add to Cart'} handleClick={addToCart} item={guitar}  />
    </div>
</div>
  )
}

export default Guitar