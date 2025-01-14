import React from 'react'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Contacts from './Contacts'

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Projects/>
        <Testimonials/>
        <Contacts/>
    </div>
  )
}

export default Home