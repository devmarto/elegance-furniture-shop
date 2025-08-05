import './button.styles.scss';

const BUTTON_TYPE_CLASS = {
  google: 'google-sing-in',
  invert: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button className={`button-default ${BUTTON_TYPE_CLASS[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button;