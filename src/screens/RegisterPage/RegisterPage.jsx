import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/slices/auth';

import AuthBoilerplate from '../../components/AuthBoilerplate/AuthBoilerplate';

import { RegisterPageContainer } from './RegisterPage.styled';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
      email,
      password
    }
    dispatch(registerUser(formData))
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
