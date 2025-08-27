import { ButtonStyle } from './button.style.ts';

const Button = ({ children, ...otherProps }) => {
  return (
    <ButtonStyle {...otherProps}>
      {children}
    </ButtonStyle>
  )
}

export default Button;