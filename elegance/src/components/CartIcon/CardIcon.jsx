import { useContext } from 'react';
import { CartIconContainer } from './cart-icon-styles'
import { CartContext } from '../../contexts/cart.context';
import shoppingBag from '../../assets/icon/shopping.svg';



const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
      {/* <MdOutlineShoppingCart /> */}
      <img src={shoppingBag} alt="Shopping Bag Icon" className="shopping-bag-icon" />
      <span>{cartItemCount}</span>
    </CartIconContainer>
  )
}

export default CardIcon;