import styled from 'styled-components';

export const HeaderContainer = styled.div`
	background: #301446;
	padding: 30px 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;

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

export const Auth = styled.div`
	a {
		background-color: #ea7052;
		border-radius: 10px;
		margin: 10px;
		border: 1px solid #ea7052;
		font-size: 20px;
		color: #fff;
	}
	#reg {
		padding: 10px 25px;
		&:hover {
			background: inherit;
			transition: all 0.3s ease-in-out;
		}
	}
	#login {
		background: inherit;
		padding: 10px 35px;
		&:hover {
			background: #ea7052;
			transition: all 0.3s ease-in-out;
		}
	}
	@media (max-width: 576px) {
		display: flex;
		a {
			margin: 5px;
			font-size: 16px;
		}
	}
`;

export const AuthenticatedUser = styled.div`
	text-align: center;
	color: #fff;
	button {
		background: #ea7052;
		color: #fff;
		border: 1px solid #ea7052;
		border-radius: 4px;
		margin-top: 10px;
		font-size: 20px;
		padding: 4px 20px;
		&:hover {
			border: 1px solid #ea7052;
			color: #ea7052;
			background: inherit;
			transition: all 0.3s ease-in-out;
		}
	}
`;
