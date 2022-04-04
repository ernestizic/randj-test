import React from 'react';

import ArrowIcon from '../../../assets/vector.png';

import Loader from '../../Loader'

import { TopPostContainer, TopPostList } from './TopPost.styled';

const TopPost = ({isLoading, posts}) => {
	return (
		<TopPostContainer>
			<header>
				<img src={ArrowIcon} alt='arrow' className='arrowIcon' />
				<h2>Top Post</h2>
			</header>

			{isLoading && <Loader /> }
			<TopPostList>
				{posts &&
					posts.slice(0, 6).map((post) => (
						<div key={post.id} className='post-container'>
							<>
							<img src= {post.metaImageUrl} alt="post desc"/>
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
