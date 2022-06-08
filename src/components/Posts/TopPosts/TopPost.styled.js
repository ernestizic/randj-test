import styled from 'styled-components';

export const TopPostContainer = styled.div`
	padding: 40px 60px;

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
`;

export const TopPostList = styled.div`
	overflow: scroll;
	display: flex;

	.post-container {
		border-radius: 10px;
		margin: 20px 10px;
		position: relative;
		height: 350px;
		min-width: 500px;
		@media (max-width: 576px) {
			min-width: 250px;
			height: 200px;
		}

		img {
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

            p{
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
