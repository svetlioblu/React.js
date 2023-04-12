import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Headrer/Header'
import { Home } from './components/Home/Home'
import {Service} from './components/Service/Service'
import { Footer } from './components/Footer/Footer'


function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service/>} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
