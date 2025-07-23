import CardItem from './components/CardItem/CardItem';
import CardList from './components/CardList/CardList';

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
    {
      id: 4,
      name: 'Cupboard',
      image: './assets/categories/cupboard.png'
    }
  ]

  return (
   <CardList categories={categories}/>
  )
}

export default App
