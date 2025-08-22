import { useContext } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartIconContainer } from './cart-icon-styles'
import { CartContext } from '../../contexts/cart.context';



const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
      <MdOutlineShoppingCart />
      <span>{cartItemCount}</span>
    </CartIconContainer>
  )
}

export default CardIcon;