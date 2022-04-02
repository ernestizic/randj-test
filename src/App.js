import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexPage from './screens/IndexPage/IndexPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<div className='content-wrap'>
					<Routes>
						<Route exact path='/' element={<IndexPage />} />
						<Route exact path='/register' element={<RegisterPage />} />
						<Route exact path='/login' element={<IndexPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
