import React, { useState } from 'react';

import ArrowIcon from '../../../assets/vector.png';
import Loader from '../../Loader';

import {
	TrendingPostsContainer,
	TrendingPostsGrid,
} from './TrendingPosts.styled';

const TrendingPosts = ({ isLoading, posts }) => {
	const [itemsToShow, setItemsToShow] = useState(8);
	const [isExpanded, setIsExpanded] = useState(false);

	const showMore = () => {
		if (itemsToShow === 8) {
			setItemsToShow(posts.length);
			setIsExpanded(true);
		} else {
			setItemsToShow(8);
			setIsExpanded(false);
		}
	};

	return (
		<TrendingPostsContainer>
			<header>
				<img src={ArrowIcon} alt='arrow' className='arrowIcon' />
				<h2>Trending</h2>
			</header>

			{isLoading && <Loader />}

			<TrendingPostsGrid>
				{posts &&
					posts.slice(0, itemsToShow).map((post) => (
						<div key={post.id} className='post-container'>
							<img src={post.metaImageUrl} alt='post desc' />
							<div className='content'>
								<p>{post.description}</p>
							</div>
						</div>
					))}
			</TrendingPostsGrid>
			{posts.length > 1 && (
				<div className='button-container'>
					<button onClick={showMore}>
						{isExpanded ? 'Show Less' : 'Show More'}
					</button>
				</div>
			)}
		</TrendingPostsContainer>
	);
};

export default TrendingPosts;
