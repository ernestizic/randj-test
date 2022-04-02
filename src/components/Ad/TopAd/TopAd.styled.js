import styled from 'styled-components';

export const AdContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 20px;
	background: #ea7052;
	color: #fff;
	padding: 25px 50px;
	@media (max-width: 576px) {
		padding: 5px;
	}

	p {
		border-bottom: 1px solid #fff;
		padding-bottom: 3px;
		@media (max-width: 576px) {
			padding: 0px 15px;
		}
	}

	.tag {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		padding: 10px 40px;
		@media (max-width: 576px) {
			padding: 4px 10px;
		}
	}
	.close {
		font-size: 28px;
		&:hover{
			cursor: pointer;
		}
	}
`;
