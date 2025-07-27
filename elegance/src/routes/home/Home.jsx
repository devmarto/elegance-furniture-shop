import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: 'Chair',
      image: './assets/categories/chair.jpg'
    },
    {
      id: 2,
      name: 'Sofa',
      image: './assets/categories/sofa.png'
    },
    {
      id: 3,
      name: 'Bed',
      image: './assets/categories/bed.jpg'
    },

  ]
  return (
    <>
      <Hero />
      <CardList categories={categories}/>
    </>
  )
}

export default Home;