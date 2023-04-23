import { Routes, Route } from 'react-router-dom'


import { Header } from './components/Headrer/Header'
import { Home } from './components/Home/Home'
import { LogIn } from './components/LogIn/Login'
import { Register } from './components/Register/Register'
import { Service } from './components/Service/Service'
import { MyProjects } from './components/MyProjects/MyProjects'
import { CreateService } from './components/Service/CreateService/CreateService'
import { EditService } from './components/Service/EditService/EditService'
import { Error404 } from './components/Errors/Error404'
import { Footer } from './components/Footer/Footer'

import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'
import { RouteGuard } from './components/common/RouteGuard'


function App() {


  return (
//to do
//optimise useDataContext
// localstorage on checkbox
// forms inline validation
// layput if + 4 items
//server responce validation on log in wrong pass and email
// add recent news in the footer can play with the state
// clear not used public data
//documentation

    <AuthProvider>
      <Header />
      <DataProvider>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Service />} />
          <Route path='/create' element={
            <RouteGuard>
              <CreateService />
            </RouteGuard>
          } />
          <Route path='/myProjects' element={
            <RouteGuard>
              <MyProjects />
            </RouteGuard>
          } />
          <Route path='/edit' element={
            <RouteGuard>
              <EditService />
            </RouteGuard>
          } />



          <Route path='/Login' element={<LogIn />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </DataProvider>
      <Footer />
    </AuthProvider>
  )
}

export default App
