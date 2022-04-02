import React from 'react'

import HeroImage from '../../assets/hero-img.png'
import Playstore from '../../assets/playstore.png'
import Appstore from '../../assets/appstore.png'
import { DownloadContainer, HeroContainer, HeroImageContainer, MissionContainer } from './Hero.styled'

const Hero = () => {
  return (
    <HeroContainer>
      <MissionContainer>
        <header>Our mission is to <span className='highlight'>advance</span> humanity</header>
        <p>We would strive to achieve that through providing education and quality health</p>
        <DownloadContainer>
          <p>DOWNLOAD APP</p>
          <img src={Playstore} alt="playstore" /> 
          <img src={Appstore} alt="appstore" /> 
        </DownloadContainer>
      </MissionContainer>
      <HeroImageContainer>
        <img src={HeroImage} alt="Little girl" />
      </HeroImageContainer>
    </HeroContainer>
  )
}

export default Hero