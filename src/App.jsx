import React from 'react'
import NavBar from './Components/NavBar'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Blog from './Pages/Blog/Blog'
import Product from './Pages/Product/Product'
const App = () => {
  return (
    <>
      <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route index element={<Home /> }/>
  <Route path='/Home' element={<Home /> }/>
  <Route path='/Shop' element={<Shop/>}/>
  <Route path='/Contact' element={<Contact />} />
  <Route path='/Blog' element={<Blog />} />
  <Route path='/About' element={<About/>} />
  <Route path='/Product/:id' element={<Product/>}/>
  <Route/>
  <Route path='/cart' element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
  
    </>
  )
}

export default App
