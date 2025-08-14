import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import CollegesSection from './component/CollegesSection'
import FeaturesSection from './component/FeaturesSection'
import Footer from './component/Footer'
import PopupRegistrationForm from './component/PopupRegistrationForm'
import Specialisation from './component/Specialisation'
import OurRecuriter from './component/OurRecuriter'


const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Specialisation />
      
      <CollegesSection />
      <OurRecuriter />
      <FeaturesSection />
      <Footer />
      <PopupRegistrationForm />
    </div>
  )
}

export default App
