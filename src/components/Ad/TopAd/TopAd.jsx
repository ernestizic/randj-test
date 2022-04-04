import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AdContainer } from './TopAd.styled';

const TopAd = ({ setShowAd }) => {
	const closeAd = () => {
		setShowAd(false);
	};
	return (
		<AdContainer>
			<div className='tag'>New!</div>
			<p> Announcing our $15 million Series A Funding! </p>
			<AiOutlineCloseCircle className='close' onClick={closeAd} />
		</AdContainer>
	);
};

export default TopAd;
