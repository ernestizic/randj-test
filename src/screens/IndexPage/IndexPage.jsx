import React, {useState} from 'react'
import TopAd from '../../components/Ad/TopAd/TopAd'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'
import GetStarted from '../../components/GetStarted/GetStarted'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'

const IndexPage = () => {
  const [showAd, setShowAd] = useState(true)
  return (
    <div>
        {showAd && <TopAd setShowAd={setShowAd}/>}
        <Header />
        <Hero />
        <GetStarted />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default IndexPage