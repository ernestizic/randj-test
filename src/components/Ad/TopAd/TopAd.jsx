import React from 'react'
import { AdContainer } from './TopAd.styled'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const TopAd = ({setShowAd}) => {
  const closeAd =()=> {
    setShowAd(false)
  }
  return (
    <AdContainer>
        <div className='tag'>New!</div>
        <p> Announcing our $15 million Series A Funding! </p>
        <AiOutlineCloseCircle className='close' onClick={closeAd} />

    </AdContainer>
  )
}

export default TopAd