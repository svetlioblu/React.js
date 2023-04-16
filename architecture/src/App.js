import { Routes, Route } from 'react-router-dom'


import { Header } from './components/Headrer/Header'
import { Home } from './components/Home/Home'
import { LogIn } from './components/LogIn/Login'
import { Service } from './components/Service/Service'
import { Footer } from './components/Footer/Footer'
import { Error404 } from './components/Errors/Error404'

import { AuthProvider } from './contexts/AuthContext'


function App() {

  return (

    <AuthProvider>
      <Header />
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/Login' element={<LogIn />} />
      </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
