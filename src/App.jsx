import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Banner from './components/Banner'
import Navigation from './components/Navigation'
import Profile from './components/Profile'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Header/>
      <Banner/>
      <Navigation/>
      <Profile/>
    </>
  )
}

export default App
