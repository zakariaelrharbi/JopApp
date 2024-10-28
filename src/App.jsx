import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import HomeCards from './Components/HomeCards'
import Joblisting from './Components/Joblisting'
import ViewAllJobs from './Components/ViewAllJobs'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <HomeCards/>
      <Joblisting/>
      <ViewAllJobs/>
    </div>
  )
}

export default App
