import Home from "./routes/home/Home";
import { Routes, Route } from "react-router";
import Navbar from "./routes/navbar/Navbar";

const Shop = () => {
  return (
    <h2>Shop page</h2>
  )
}

const App = () => {
  return (
    <Routes>
      <Route  path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />}/>
      </Route>
    </Routes>
  )
}

export default App
