import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopAd from './components/Ad/TopAd/TopAd'

import IndexPage from './screens/IndexPage/IndexPage';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';

function App() {
	const [showAd, setShowAd] = useState(true)
	return (
		<BrowserRouter>
			<div className='App'>
			{showAd && <TopAd setShowAd={setShowAd}/>}
				<div className='content-wrap'>
					<Routes>
						<Route exact path='/' element={<IndexPage />} />
						<Route exact path='/register' element={<RegisterPage />} />
						<Route exact path='/login' element={<LoginPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
