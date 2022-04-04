import React from 'react';
import styled from 'styled-components';
import Spinner from '../assets/unnamed.gif'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 16;
`;

const Loader = () => {
	return (
		<>
			<Container>
				<img
					src={Spinner}
					alt='Loading...'
					style={{
						width: '50px',
						height: '50px',
						margin: 'auto',
						display: 'block',
						position: 'fixed',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				/>
			</Container>
		</>
	);
};

export default Loader;
