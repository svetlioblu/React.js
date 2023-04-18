import { Routes, Route } from 'react-router-dom'


import { Header } from './components/Headrer/Header'
import { Home } from './components/Home/Home'
import { LogIn } from './components/LogIn/Login'
import { Register } from './components/Register/Register'
import { Service } from './components/Service/Service'
import { MyProjects } from './components/MyProjects/MyProjects'
import { CreateService } from './components/Service/CreateService/CreateService'
import { Error404 } from './components/Errors/Error404'
import { Footer } from './components/Footer/Footer'

import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'


function App() {


  return (

    <AuthProvider>
      <Header />
      <DataProvider>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Service />} />
          <Route path='/create' element={<CreateService />} />
          <Route path='/myProjects' element={<MyProjects />} />


          <Route path='/Login' element={<LogIn />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </DataProvider>
      <Footer />
    </AuthProvider>
  )
}

export default App
