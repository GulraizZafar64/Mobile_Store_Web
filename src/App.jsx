import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Details from './Pages/ProductDetail/Details';
import Shipping from './Pages/Shipping/Shipping';
import Confirmation from './Pages/Confirmation/Confirmation';
import Thanku from './Pages/Thanku/Thanku';
import { Toaster } from 'react-hot-toast';
import CatPage from './Pages/CatPage/CatPage';
import Footer from './Components/footer/Footer';
function App() {

  return (
    <>
    <Toaster/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phoneDetail" element={<Details />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/thanks" element={<Thanku />} />
      <Route path="/category/:name" element={<CatPage />} />
    </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
