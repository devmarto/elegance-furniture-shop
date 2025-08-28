import { SwiperSlide } from 'swiper/react';
import CardItem from "../CardItem/CardItem";
import { CardListContainer } from './card-list.style.jsx'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CardList = ({categories}) => {
  return (
     <CardListContainer
      slidesPerView={4}
      spaceBetween={32}
      pagination={{
          clickable: true,
        }}
      modules={[Pagination]}
     >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <CardItem category={category} url={category.url} />
        </SwiperSlide>
      ))}
    </CardListContainer>
  )
}

export default CardList;