import React, { useState } from 'react';
import AuthBoilerplate from '../../components/AuthBoilerplate/AuthBoilerplate';

import { RegisterPageContainer } from './RegisterPage.styled';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
	};

	return (
		<AuthBoilerplate>
			<RegisterPageContainer>
				<h2>Register</h2>
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
			</RegisterPageContainer>
		</AuthBoilerplate>
	);
};

export default RegisterPage;