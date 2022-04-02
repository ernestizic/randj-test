import React from 'react'

import GetStartedImg from "../../assets/boy.png"
import { GetStartedContainer } from './GetStarted.styled'

const GetStarted = () => {
  return (
    <GetStartedContainer>
        <div className='get-started'>
            <h1>Everything you'll need to <span style={{color: '#ea7052'}}>excel</span> in life</h1>
            <p>we've curated a list of valuable resources to get you going in life, all for free!</p>
            <button>Get Started</button>
        </div>
        <div className='image-container'>
            <img src={GetStartedImg} alt="boy in bus" />
        </div>
    </GetStartedContainer>
  )
}

export default GetStarted