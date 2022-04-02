import styled from 'styled-components';

export const GetStartedContainer = styled.div`
	padding: 50px 60px;
	background: #fff;
	color: #000;
	display: flex;
	@media (max-width: 576px) {
		flex-direction: column-reverse;
		padding: 50px 20px;
	}

	.get-started {
		width: 50%;
		padding: 50px 0;
		h1 {
			font-size: 55px;
			line-height: 81px;
		}
		p {
			font-size: 20px;
			line-height: 30px;
			letter-spacing: 1px;
			word-spacing: 3px;
			padding: 40px 0;
		}
		button {
			width: 90%;
			padding: 20px;
			font-size: 26px;
			background: #ea7052;
			color: #fff;
			border-radius: 16px;
			border: none;
			&:hover {
				cursor: pointer;
				border: 1px solid #ea7052;
				color: #ea7052;
				background: inherit;
				transition: all 0.3s ease-in-out;
			}
		}
		@media (max-width: 768px) {
			padding: 0;
		}
		@media (max-width: 576px) {
			width: 100%;
			h1 {
				font-size: 40px;
				line-height: 51px;
			}
			button {
				width: 100%;
			}
		}
	}

	.image-container {
		padding: 0 100px;
		width: 50%;
		img {
			width: 100%;
			height: auto;
		}
		@media (max-width: 768px) {
			padding: 0;
		}
		@media (max-width: 576px) {
			width: 100%;
		}
	}
`;
