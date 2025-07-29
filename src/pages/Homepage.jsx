import React from 'react'
import Hero from '../components/Hero'
import Featurework from '../components/Featurework'
import WhatICanDo from '../components/WhatICanDo'
import HomeServices from '../components/HomeServices'
import Contact from '../components/Contact'
import { Button } from '@/components/ui/button'
import Herosection from '@/components/Herosection'

const Homepage = () => {
  return (
    <main>
        <Herosection/>
        <Featurework/>
        <WhatICanDo/>
        <HomeServices/>
        <Contact/>
    </main>
  )
}

export default Homepage