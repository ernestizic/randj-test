import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { FooterContainer, LinksContainer } from './Footer.styled'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo} alt='logo'/> 
      <LinksContainer>
        <Link to='/#'>Blog</Link>
        <Link to='/#'>Privacy Policy</Link>
        <Link to='/#'>About</Link>
        <Link to='/#'>Contact</Link>
      </LinksContainer>

      <p>copyright Rudify 2022</p>
    </FooterContainer>
  )
}

export default Footer