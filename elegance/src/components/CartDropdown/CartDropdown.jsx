import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import '../CartDropdown/cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../CartItem/CartItem';



const CartDropdown = () => {
  
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandle = () => {
    navigate('/checkout');
  }

  return (
    <div className="cart-dropdown-container">
      <div className='cart-dropdown-items-container'>
        <div>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <Button onClick={goToCheckoutHandle}>GO TO CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropdown;