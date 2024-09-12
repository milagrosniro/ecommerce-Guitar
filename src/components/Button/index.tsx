import { IButtonProps } from './button.types'

const Button = ({title, dispatch, item}: IButtonProps) => {
  return (
    <button 
            type="button"
            className="btn btn-dark w-100"
            onClick={()=>dispatch({type:'addToCart', payload:{guitar:item}})}
        >{title}</button>
  )
}

export default Button