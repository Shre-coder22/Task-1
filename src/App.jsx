import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import Hero from './components/Hero'
import Titlebar from './components/Titlebar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Titlebar />
      <Page />
    </div>
  )
}

export default App
