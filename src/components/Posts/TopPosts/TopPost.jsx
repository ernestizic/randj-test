import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Loader from '../../Loader';

import ArrowIcon from '../../../assets/vector.png';

import { TopPostContainer, TopPostList } from './TopPost.styled';

const TopPost = ({ isLoading, posts }) => {
	console.log(posts);
	return (
		<TopPostContainer>
			<header>
				<img src={ArrowIcon} alt='arrow' className='arrowIcon' />
				<h2>Top Post</h2>
			</header>

			{isLoading && <Loader />}
			<TopPostList>
				{posts &&
					posts.slice(0, 6).map((post) => (
						<div key={post.id} className='post-container'>
							<>
								<LazyLoadImage
									alt='post description'
									height="100%"
									width= '100%'
									src={post.metaImageUrl}
									placeholderSrc={post.metaImageUrl}
									effect='blur'
								/>
								<div className='content'>
									<p>{post.description}</p>
								</div>
							</>
						</div>
					))}
			</TopPostList>
		</TopPostContainer>
	);
};

export default TopPost;
