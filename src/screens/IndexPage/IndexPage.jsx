import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'
import GetStarted from '../../components/GetStarted/GetStarted'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'

const IndexPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <GetStarted />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default IndexPage