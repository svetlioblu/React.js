
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Headrer/Header'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>



    </>

  )
}

export default App
