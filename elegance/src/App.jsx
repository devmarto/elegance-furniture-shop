import Home from "./routes/home/Home";
import { Routes, Route } from "react-router";
import Navbar from "./routes/navbar/Navbar";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route  path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />}/>
        <Route path='/auth' element={<Authentication />}/>
      </Route>
    </Routes>
  )
}

export default App
