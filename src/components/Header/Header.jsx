import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logout} from '../../redux/slices/auth'
import { useDispatch } from 'react-redux'

import Logo from '../../assets/logo.png'


import { Auth, AuthenticatedUser, HeaderContainer } from './Header.styled'

const Header = () => {
  const {token} = useSelector((state)=> state.auth)

  const dispatch = useDispatch()

  return (
    <HeaderContainer>
        <Link to='/'> <img src={Logo} alt="logo"/> </Link>

        {token ? (
          <AuthenticatedUser>
            <p>Hi Email</p>
            <button onClick={()=> dispatch(logout()) }>Logout</button>
          </AuthenticatedUser>
        ) : (
          <Auth>
            <Link to='/register' id='reg'> Register </Link>
            <Link to='/login' id='login'> Login </Link>
          </Auth>
        )}
    </HeaderContainer>
  )
}

export default Header