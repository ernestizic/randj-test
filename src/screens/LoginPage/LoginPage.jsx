import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/auth';

import AuthBoilerplate from '../../components/AuthBoilerplate/AuthBoilerplate';
import { LoginPageContainer } from './LoginPage.styled';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			email,
			password,
		};
		dispatch(loginUser(formData))
	};
	return (
		<AuthBoilerplate>
			<LoginPageContainer>
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<input
						type='email'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type='submit'>Register</button>
				</form>
			</LoginPageContainer>
		</AuthBoilerplate>
	);
};

export default LoginPage;
