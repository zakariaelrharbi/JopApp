import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom'
import React from 'react'
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './Pages/JobsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/jobs' element={<JobsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
