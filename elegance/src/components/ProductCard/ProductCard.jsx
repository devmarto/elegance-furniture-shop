import './product-card.styles.scss'
import { useContext } from 'react';

import Button from '../Button/Button';

import { CartContext } from '../../contexts/cart.context';

const ProductCard = ( {products} ) => {
  const {name, imageUrl, price} = products;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(products);
  return (
    <div className='product-card-container'>
      <img className='product-card-image' src={imageUrl} alt={`${name}`}/>
      <div className='product-card-info'>
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}> Add to cart </Button>
    </div>
  )
}

export default ProductCard;