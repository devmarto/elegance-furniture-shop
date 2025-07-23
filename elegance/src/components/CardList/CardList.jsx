import CardItem from "../CardItem/CardItem";
import './card-list.styles.scss'

const CardList = ({categories}) => {
  return (
     <div className="container-card-list">
      {categories.map((category) => (
        <CardItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CardList;