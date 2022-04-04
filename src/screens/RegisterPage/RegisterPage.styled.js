import styled from 'styled-components';

export const RegisterPageContainer = styled.div`
	background: #fff;
	margin: 100px 250px;
	text-align: center;
	padding: 45px;
	border-radius: 20px;
	@media (max-width: 912px) {
		max-width: 80%;
		margin: 30% auto;
        padding: 20px;
	}

	h2 {
		padding: 30px;
	}

	input {
		width: 80%;
		padding: 15px;
		margin-bottom: 20px;
		border-radius: 7px;
		border: none;
		background: #e5e5e5;
		font-size: 18px;
		@media (max-width: 912px) {
			width: 100%;
		}
	}
	button {
		width: 80%;
		padding: 15px;
		margin-bottom: 30px;
		border: 1px solid #ea7052;
		color: #fff;
		border-radius: 7px;
		background: #ea7052;
		font-size: 18px;
		&:hover {
			border: 1px solid #ea7052;
			color: #ea7052;
			background: inherit;
			transition: all 0.3s ease-in-out;
		}
        @media (max-width: 912px) {
			width: 100%;
		}
	}
`;
