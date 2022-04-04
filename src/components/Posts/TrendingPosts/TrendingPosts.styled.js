import styled from 'styled-components';

export const TrendingPostsContainer = styled.div`
	padding: 40px 60px 200px 60px;

	@media (max-width: 576px) {
		padding: 10px;
	}

	.arrowIcon {
		width: 30px;
		margin-right: 30px;
		@media (max-width: 576px) {
			width: 20px;
		}
	}

	header {
		display: flex;
		align-items: center;
	}

	.button-container {
		margin-top: 50px;
		text-align: center;
		@media (max-width: 576px) {
			margin: 30px 0 50px 0 ;
		}
		button {
			border-radius: 10px;
			background: #ea7052;
			color: #fff;
			padding: 20px 150px;
			font-size: 20px;
			border: 1px solid #ea7052;
			&:hover {
				cursor: pointer;
				border: 1px solid #ea7052;
				color: #ea7052;
				background: inherit;
				transition: all 0.3s ease-in-out;
			}
			@media (max-width: 576px) {
				padding: 10px 90px;
			}
		}
	}
`;

export const TrendingPostsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem 5rem;

	@media (max-width: 768px) {
		gap: 1rem;
	}
	@media (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
	}

	.post-container {
		border-radius: 10px;
		margin: 20px 10px;
		position: relative;
		height: 400px;
		min-width: 500px;
		@media (max-width: 576px) {
			min-width: 200px;
			height: 200px;
		}
		@media (max-width: 912px) {
			min-width: 200px;
			height: 250px;
		}

		img {
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
		.content {
			font-size: 17px;
			border-radius: 10px;
			position: absolute;
			height: 140px;
			bottom: 30px;
			background-color: rgba(128, 128, 128, 0.5);
			color: #fff;
			margin-left: 10px;
			width: 96%;
			padding: 40px 30px;

			p {
				line-height: 25px;
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			@media (max-width: 576px) {
				font-size: 14px;
				padding: 10px;
				height: 70px;
				bottom: 10px;
				margin-left: 4px;
			}
		}
	}
`;
