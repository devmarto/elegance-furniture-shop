import './shop.styles.scss'
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/ProductCard/ProductCard";


const Shop = () => {
  const { products }  = useContext(ProductsContext)
  return (
    <div className="shop-products-container">
      {products.map((products) => (
        <ProductCard key={products.id} products={products} />
      ) )}
    </div>
  )
}

export default Shop;