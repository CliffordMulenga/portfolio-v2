import React from 'react'
import WhatICanDo from '../components/WhatICanDo'
import HomeServices from '../components/HomeServices'
import Contact from '../components/Contact'
import Herosection from '@/components/Herosection'
import SelectedWork from '@/components/SelectedWork'

const Homepage = () => {
  return (
    <main>
        <Herosection/>
        {/* <Featurework/> */}
        <SelectedWork/>
        <WhatICanDo/>
        <HomeServices/>
        {/* <Contact/> */}
    </main>
  )
}

export default Homepage