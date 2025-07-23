import './card-item.styles.scss';
const CardItem = ({ category }) => {
  const { image, name } = category;
  return (
    <div className="container-category" style={{
      backgroundImage: `url(${image})`
    }}>
      <div className="box-name-category">
        <h3 className="name-category">{name}</h3>
      </div>
    </div>
  )
}

export default CardItem;