import { IButtonProps } from './button.types'

const Button = ({title, handleClick, item}: IButtonProps) => {
  return (
    <button 
            type="button"
            className="btn btn-dark w-100"
            onClick={()=>handleClick(item)}
        >{title}</button>
  )
}

export default Button