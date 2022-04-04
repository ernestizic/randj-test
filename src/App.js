import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import TopAd from './components/Ad/TopAd/TopAd';
import IndexPage from './screens/IndexPage/IndexPage';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';

import { useSelector } from 'react-redux';

import {motion} from 'framer-motion'

// toastify imports
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
	const { token } = useSelector((state)=> state.auth)
	
	const [showAd, setShowAd] = useState(true);

	
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
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
				<motion.div className='content-wrap' layout>
					<Routes>
						<Route exact path='/' element={<IndexPage />} />
						<Route exact path='/register' element={ token ? <Navigate to='/' /> : <RegisterPage />} />
						<Route exact path='/login' element={ token ? <Navigate to='/' /> : <LoginPage />} />
					</Routes>
				</motion.div>
			</div>
		</BrowserRouter>
	);
}

export default App;
