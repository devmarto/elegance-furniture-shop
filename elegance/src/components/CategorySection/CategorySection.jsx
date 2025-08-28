import Button from '../Button/Button';
import CardList from "../../components/CardList/CardList";
import {
  CategorySectionContainer,
  CategorySectionHeader,
  CategorySectionTitle
} from './category-section-style'

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Arm Chairs',
      url: 'shop/arm%20chairs',
      image: './assets/categories/arm-chair.jpeg'
    },
    {
      id: 2,
      name: 'Chairs',
      url: 'shop/chairs',
      image: './assets/categories/chair.png'
    },
    {
      id: 3,
      name: 'Decor',
      url: 'shop/decor',
      image: './assets/categories/decor.png'
    },
    {
      id: 4,
      name: 'Sofas',
      url: 'shop/sofas',
      image: './assets/categories/sofas.png'
    },
    {
      id: 5,
      name: 'Tables',
      url: 'shop/tables',
      image: './assets/categories/tables.png'
    },
  ]

  return (
    <CategorySectionContainer>
      <CategorySectionHeader>
        <CategorySectionTitle>Shop by Categories</CategorySectionTitle>
        <Button>View All</Button>
      </CategorySectionHeader>
      <CardList categories={categories}/>
    </CategorySectionContainer>
  )
}

export default CategorySection;