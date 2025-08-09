import { useContext } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import './cart-icon.styles.scss'
import { CartContext } from '../../contexts/cart.context';



const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <MdOutlineShoppingCart />
      <span>{cartItemCount}</span>
    </div>
  )
}

export default CardIcon;