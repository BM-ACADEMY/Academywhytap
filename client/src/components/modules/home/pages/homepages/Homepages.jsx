import React from 'react'
import Herosection from './Hero'
import WelcomeSection from './Welcome'
import FutureReady from './FutureReady'
import PlacementSupport from './PlacementSupport'
import StudentsWorkAt from './StudentsWorkAt'
import Trendingcourses from './Trendingcourses'
import CeoSection from './CeoSection'
import Whychoose from './Whychoose'

export const Homepages = () => {
  return (
    <div>
        <Herosection/>
        <WelcomeSection />
        <Trendingcourses/>
        <CeoSection />
        <Whychoose/>
        <FutureReady />
        <PlacementSupport />
        <StudentsWorkAt />
    </div>
  )
}
