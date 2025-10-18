

import React from 'react'



import Navbar from './Naviation/navbar'
import Hero from './Sections/hero'
import Menu from './Sections/menu'
import Combo from './Sections/combo'
import Contact from './Sections/contact'
import Delivery from './Sections/delivery'


const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Menu/>
    <Combo/>
    <Delivery/>
    <Contact/>
   
      </div>
  )
}

export default App