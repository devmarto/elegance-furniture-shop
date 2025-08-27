import CardItem from "../CardItem/CardItem";
import { CardListContainer } from './card-list.style.jsx'

const CardList = ({categories}) => {
  return (
     <CardListContainer>
      {categories.map((category) => (
        <CardItem key={category.id} category={category} url={category.url}/>
      ))}
    </CardListContainer>
  )
}

export default CardList;