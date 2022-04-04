import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import TopAd from './components/Ad/TopAd/TopAd';
import IndexPage from './screens/IndexPage/IndexPage';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';

import { useSelector } from 'react-redux';

// toastify imports
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const { token } = useSelector((state)=> state.auth)
	
	const [showAd, setShowAd] = useState(true);
	return (
		<BrowserRouter>
			<div className='App'>
				<ToastContainer
					position='top-center'
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					ms
					transition={Flip}
				/>
				{showAd && <TopAd setShowAd={setShowAd} />}
				<div className='content-wrap'>
					<Routes>
						<Route exact path='/' element={<IndexPage />} />
						<Route exact path='/register' element={ token ? <Navigate to='/' /> : <RegisterPage />} />
						<Route exact path='/login' element={ token ? <Navigate to='/' /> : <LoginPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
