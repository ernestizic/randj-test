import styled from 'styled-components';

export const HeroContainer = styled.div`
	padding: 50px 60px;
	background: #301446;
	color: #fff;
	display: flex;
	@media (max-width: 576px) {
		flex-direction: column-reverse;
        padding: 50px 20px;
	}
    @media (max-width: 768px) {
        flex-direction: column-reverse;
	}
`;
export const MissionContainer = styled.div`
	width: 50%;

	header {
		font-size: 55px;
		line-height: 91px;
	}
	.highlight {
		color: #ea7052;
		border-bottom: 4px solid #fff;
		padding-bottom: 1px;
	}
	p {
		font-size: 20px;
		line-height: 30px;
		letter-spacing: 2px;
		word-spacing: 3px;
		padding: 40px 0;
	}
	@media (max-width: 576px) {
		width: 100%;
		header {
			font-size: 40px;
			line-height: 51px;
		}
	}
    @media (max-width: 768px) {
        width: 100%;
	}
`;
export const HeroImageContainer = styled.div`
	text-align: center;
	width: 50%;
	img {
		width: 100%;
        height: auto
	}
	@media (max-width: 576px) {
		width: 100%;
	}
    @media (max-width: 768px) {
        width: 100%;
	}
`;
export const DownloadContainer = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 120px;
		height: 50px;
		padding: 0 10px;
		@media (max-width: 576px) {
			width: 100px;
		}
	}
`;
