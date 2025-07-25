import Home from "./routes/home/Home";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
    </Routes>
  )
}

export default App
