import './product-card.styles.scss'
import Button from '../Button/Button';

const ProductCard = ( {products} ) => {
  const {name, imageUrl, price} = products;
  return (
    <div className='product-card-container'>
      <img className='product-card-image' src={imageUrl} alt={`${name}`}/>
      <div className='product-card-info'>
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
      <Button buttonType='inverted'> Add to cart </Button>
    </div>
  )
}

export default ProductCard;