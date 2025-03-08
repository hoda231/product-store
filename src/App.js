import Navbar from "./Navbar"
import Navba from "./comp/Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import Detail from "./pages/detail"
import Contact from "./pages/contact"
import Footer from "../src/components/Footer";
import { Routes, Route } from "react-router-dom"
import Slider from "../src/comd/Slider"

function App() {
  return (
    <>
 
  
    <Slider/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/category' element={<Detail />} />
          <Route path='/contact' element={<Contact />} />
     
     
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
