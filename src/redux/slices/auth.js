import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

/******************** Thunks ********************/

// Register User
export const registerUser = (formData) => async (dispatch, getState) => {
	dispatch(registerLoading());
	try {
		const res = await axios.post(
			'https://www.giropay.xyz/api/v1/giro-app/auth/register',
			formData
		);
		dispatch(registerSuccess(res.data.data.data));
		toast.success(res.data.data.data, { theme: 'colored' });
	} catch (err) {
		let apiErr =
			err.response && err.response.data.Error
				? err.response.data.Error
				: err.msg;
		dispatch(registerFailure(apiErr));
		toast.error(apiErr, { theme: 'colored' });
	}
};

// Login User
export const loginUser = (formData) => async (dispatch, getState) => {
	const token = getState().auth.token;

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	if (token) {
		config.headers['authorization'] = `Bearer ${token}`;
	}
	dispatch(loginLoading());
	try {
		const res = await axios.post(
			'https://www.giropay.xyz/api/v1/giro-app/auth/login',
			formData,
			config
		);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		let apiErr =
			err.response && err.response.data.Error
				? err.response.data.Error
				: err.msg;
		dispatch(loginFailure(apiErr));
		toast.error(apiErr, { theme: 'colored' });
	}
};

// Load User
export const getUserDetail = () => async (dispatch, getState) => {
	const token = getState().auth.token;

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	if (token) {
		config.headers['authorization'] = `Bearer ${token}`;
	}
	dispatch(loadUserLoading());
	try {
		const res = await axios.get(
			'https://www.giropay.xyz/api/v1/giro-app/auth/me',
			config
		);
		dispatch(loadUserSuccess(res.data));
	} catch (err) {
		dispatch(loadUserFailure(err.response.data.Error));
	}
};

/************************** Slice ***********************/

const authSlice = createSlice({
	name: 'auth',

	// State
	initialState: {
		isLoading: false,
		user: null,
		msg: null,
		token: localStorage.getItem('token'),
	},

	// Reducers
	reducers: {
		// Register reducer
		registerLoading: (state) => {
			return {
				...state,
				isLoading: true,
			};
		},
		registerSuccess: (state, action) => {
			return {
				...state,
				isLoading: false,
				msg: action.payload,
			};
		},
		registerFailure: (state, action) => {
			return {
				...state,
				isLoading: false,
				msg: action.payload,
			};
		},

		// Login reducer
		loginLoading: (state) => {
			return {
				...state,
				isLoading: true,
			};
		},
		loginSuccess: (state, action) => {
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				isLoading: false,
				token: action.payload.token,
			};
		},
		loginFailure: (state, action) => {
			localStorage.removeItem('token');
			return {
				...state,
				isLoading: false,
				token: null,
				msg: action.payload,
			};
		},

		// user reducer
		loadUserLoading: (state) => {
			return {
				...state,
				isLoading: true,
			};
		},
		loadUserSuccess: (state, action) => {
			return {
				...state,
				isLoading: false,
				user: action.payload.user
			};
		},
		loadUserFailure: (state) => {
			localStorage.removeItem('token');
			return {
				...state,
				isLoading: false,
				token: null,
				user: null,
			};
		},

		// Logout
		logout: (state) => {
			localStorage.removeItem('token');
			return {
				...state,
				isLoading: false,
				token: null,
			};
		},
	},
});

// Actions
export const {
	registerLoading,
	registerSuccess,
	registerFailure,
	loginLoading,
	loginSuccess,
	loginFailure,
	loadUserLoading,
	loadUserSuccess,
	loadUserFailure,
	logout,
} = authSlice.actions;

export default authSlice.reducer;
