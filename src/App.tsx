import { Route, Routes } from "react-router-dom"
import Footer from "./components/templates/footer"
import Navbar from "./components/templates/navbar"
import Home from "./components/templates/home"
import Store from "./components/templates/store"
import About from "./components/templates/about"
function App() {

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
