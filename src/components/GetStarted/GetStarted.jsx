import React from 'react';
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GetStartedImg from '../../assets/boy.png';
import { GetStartedContainer } from './GetStarted.styled';

const GetStarted = () => {
	return (
		<GetStartedContainer>
			<div className='get-started'>
				<h1 data-aos='fade-up'>
					Everything you'll need to{' '}
					<span style={{ color: '#ea7052' }}>excel</span> in life
				</h1>
				<p>
					we've curated a list of valuable resources to get you going in life,
					all for free!
				</p>
				<Link to='/register'>
					<button data-aos='zoom-out'>Get Started</button>
				</Link>
			</div>
			<div className='image-container'>
				<LazyLoadImage
					alt='boy in bus'
					src={GetStartedImg}
					placeholderSrc={GetStartedImg}
					width='100%'
					height='auto'
					effect='blur'
				/>
			</div>
		</GetStartedContainer>
	);
};

export default GetStarted;
