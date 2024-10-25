import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import HomeCards from './Components/HomeCards'
import JobListings from './Components/jobListings'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <HomeCards/>
      <JobListings/>
      
    </div>
  )
}

export default App
