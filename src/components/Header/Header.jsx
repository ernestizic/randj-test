import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'


import { Auth, HeaderContainer } from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
        <Link to='/'> <img src={Logo} alt="logo"/> </Link>
        <Auth>
          <Link to='/register' id='reg'> Register </Link>
          <Link to='/login' id='login'> Login </Link>
        </Auth>
    </HeaderContainer>
  )
}

export default Header