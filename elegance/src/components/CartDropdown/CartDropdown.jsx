import Button from '../Button/Button';
import '../CartDropdown/cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className='cart-dropdown-items-container'>
        <div></div>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropdown;