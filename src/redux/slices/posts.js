import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch posts

export const fetchPosts = () => async (dispatch, getState) => {
	const token = getState().auth.token;

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	if (token) {
		config.headers['authorization'] = `Bearer ${token}`;
	}
	dispatch(fetchPostsLoading())
	try {
		const res = await axios.get(
			'https://www.giropay.xyz/api/v1/giro-app/products',
			config
		);
		dispatch(fetchPostsSuccess(res.data));
	} catch (err) {
		dispatch(fetchPostsFailure( err.response.data.Error))
	}
};

/************************** Slice ***********************/

const postSlice = createSlice({
	name: 'posts',

	// State
	initialState: {
		isLoading: false,
		posts: [],
	},

	// Reducers
	reducers: {
		// posts reducer
		fetchPostsLoading: (state) => {
			return {
				...state,
				isLoading: true,
			};
		},
		fetchPostsSuccess: (state, action) => {
			return {
				...state,
				isLoading: false,
				posts: action.payload.data,
			};
		},
		fetchPostsFailure: (state, action) => {
			return {
				...state,
				isLoading: false,
				posts: [],
			};
		},
	},
});

// Actions
export const { fetchPostsLoading, fetchPostsSuccess, fetchPostsFailure } =
	postSlice.actions;

export default postSlice.reducer;
