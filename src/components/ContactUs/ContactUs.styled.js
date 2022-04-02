import styled from 'styled-components';

export const ContactUsContainer = styled.div`
	padding: 70px 60px 220px 60px;
	background: #f4f4f4;
	color: #000;
	display: flex;
	@media (max-width: 576px) {
		flex-direction: column-reverse;
		padding: 50px 20px;
	}

	.contact {
		width: 50%;
		@media (max-width: 576px) {
			width: 100%;
		}
		h1 {
			font-size: 55px;
			line-height: 81px;
		}
		p {
			font-size: 21px;
			line-height: 30px;
			letter-spacing: 1px;
			word-spacing: 2px;
			padding: 20px 0;
		}

		.whatsapp {
			display: flex;
			align-items: center;
			img {
				width: 40px;
			}
			p {
				padding-left: 20px;
			}
		}

		.mail {
			display: flex;
			align-items: center;
			.mail-img {
				background: #707170;
				padding: 5px;
			}
			img {
				width: 30px;
			}
			p {
				padding-left: 20px;
			}
		}
	}

	.contact-image-container {
		width: 50%;
        @media (max-width: 912px) {
            width: 50%;
            img {
                width: 100%;
                height: auto;
            }
        }
		@media (max-width: 576px) {
			width: 100%;
			img {
				width: 100%;
				height: auto;
			}
		}
	}
`;
