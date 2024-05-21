import React from 'react'
import Navbar from '../src/assets/Navbar.jsx'
import Pageone from './assets/Pageone.jsx'
import Pagetwo from './Pagetwo.jsx'
import PageThree from './assets/PageThree.jsx'
import Pagetwo2 from './assets/Pagetwo2.jsx'
import MarcueCarusel from './assets/MarcueCarusel.jsx'
import Video from './assets/Video.jsx'
import PageFour from './assets/PageFour.jsx'
import Acardion from './assets/Acardion.jsx'


const App = () => {
  return (
    <div className='w-[100%] '>
      <Navbar/>
      <Pageone/>
      <Pagetwo/>
      <Pagetwo2/>
      <PageThree/>
      <MarcueCarusel/>
      <Video/>
      <PageFour/>
      <MarcueCarusel/>
      <Acardion/>
    </div>
  )
}

export default App
