import { useContext } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import './cart-icon.styles.scss'
import { CartContext } from '../../contexts/cart.context';



const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <MdOutlineShoppingCart />
      <span>10</span>
    </div>
  )
}

export default CardIcon;