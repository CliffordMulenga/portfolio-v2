import React from 'react'
import Hero from '../components/Hero'
import Featurework from '../components/Featurework'
import WhatICanDo from '../components/WhatICanDo'
import HomeServices from '../components/HomeServices'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
    <main>
        <Hero/>
        <Featurework/>
        <WhatICanDo/>
        <HomeServices/>
        <Contact/>
    </main>
  )
}

export default Homepage