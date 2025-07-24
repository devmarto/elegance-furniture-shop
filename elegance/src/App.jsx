import CardList from './components/CardList/CardList';
import Hero from './components/Hero/Hero';


const App = () => {

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

export default App
