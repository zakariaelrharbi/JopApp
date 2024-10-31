import React from 'react'
import HeroSection from '../Components/HeroSection'
import HomeCards from '../Components/HomeCards'
import Joblisting from '../Components/Joblisting'
import ViewAllJobs from '../Components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
     <HeroSection/>
     <HomeCards/>
     <Joblisting isHome={true}/>
     <ViewAllJobs/>
      
    </>
  )
}

export default HomePage
