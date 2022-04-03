import React from 'react';
import Bg from '../../assets/bg.png'
import { AuthContainer } from './AuthBoilerplate.styled';

const AuthBoilerplate = ({children}) => {
	return (
		<AuthContainer>
			<div className='sidebar'>
				<img src={Bg} alt='Background' />
			</div>

			<div className='main'>{children}</div>
		</AuthContainer>
	);
};

export default AuthBoilerplate;
