import React, { useEffect } from 'react';

import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import GetStarted from '../../components/GetStarted/GetStarted';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import TopPost from '../../components/Posts/TopPosts/TopPost';

import { useDispatch, useSelector } from 'react-redux';
import TrendingPosts from '../../components/Posts/TrendingPosts/TrendingPosts';
import { fetchPosts } from '../../redux/slices/posts';

const IndexPage = () => {
	const { token } = useSelector((state) => state.auth);
	const { isLoading, posts } = useSelector((state) => state.posts);

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])
	
	return (
		<div className='index'>
			<Header />

			{token ? (
				<>
					<TopPost isLoading={isLoading} posts={posts} />
					<TrendingPosts isLoading={isLoading} posts={posts} />
				</>
			) : (
				<>
					<Hero />
					<GetStarted />
					<ContactUs />
				</>
			)}

			<Footer />
		</div>
	);
};

export default IndexPage;
