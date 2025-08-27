import {
  CardListItemContainer,
  CardImage,
  CardTitle,
  CardLink
} from './card-item-style.jsx';

const CardItem = ({ category }) => {
  const { image, name, url } = category;
  return (
    <CardListItemContainer>
      <CardLink to={url}>
        <CardImage src={image} alt={name} />
        <CardTitle>{name}</CardTitle>
      </CardLink>
    </CardListItemContainer>
  )
}

export default CardItem;