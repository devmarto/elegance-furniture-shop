import Home from "./routes/home/Home";
import { Routes, Route } from "react-router";
import Navbar from "./routes/navbar/Navbar";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import TopHeader from "./components/TopHeader/TopHeader";

const App = () => {
  return (
    <>
      <TopHeader>
        <p>This weekend <strong>Sale 20% off</strong> on all products</p>
      </TopHeader>
      <Routes>
        <Route  path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />}/>
          <Route path='auth' element={<Authentication />}/>
          <Route path='checkout' element={<Checkout />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
