import React from 'react'
import Hero from '../components/Hero'
import Featurework from '../components/Featurework'
import WhatICanDo from '../components/WhatICanDo'
import HomeServices from '../components/HomeServices'

const Homepage = () => {
  return (
    <main>
        <Hero/>
        <Featurework/>
        <WhatICanDo/>
        <HomeServices/>
    </main>
  )
}

export default Homepage