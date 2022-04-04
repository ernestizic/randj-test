import styled from 'styled-components';

export const AuthContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	background: #e5e5e5;
	height: 100vh;
	@media (max-width: 912px) {
		position: static;
		background: inherit;
	}

	.sidebar {
		position: relative;
		width: 18%;
		img {
			width: 100%;
			height: 100vh;
		}

		@media (max-width: 912px) {
			display: none;
		}
	}

	.main {
		width: 82%;

		@media (max-width: 912px) {
			width: 100%;
		}
	}
`;
