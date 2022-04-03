import styled from 'styled-components';

export const FooterContainer = styled.div`
	padding: 50px 60px 10px 60px;
	position: absolute;
	bottom: 0;
	width: 100%;
	background: #301446;
	color: #fff;
	p {
		text-align: center;
		@media (max-width: 576px) {
			font-size: 14px;
		}
	}
	img {
		width: 180px;
	}
	@media (max-width: 576px) {
		padding: 10px;
		img {
			width: 100px;
		}
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 40px 0 60px 0;
	a {
		color: #fff;
		font-size: 20px;
		@media (max-width: 576px) {
			font-size: 16px;
		}
	}
`;
