import styled from "styled-components";

export const TitleForm = styled.h1`
	font-size: 31px;
	line-height: 150%;
	color: ${({ theme }) => theme.color.offWhite};
	font-weight: 600;
`;

export const SubTitleForm = styled.h2`
	font-size: 22px;
	line-height: 150%;
	color: ${({ theme }) => theme.color.offWhite};
`;

export const AccountsParagraph = styled.p`
	display: flex;
	align-items: center;
	gap: 12px;
	font-size: 15px;
	line-height: 150%;
	color: ${({ theme }) => theme.color.offWhite};

	&::before,
	&::after {
		content: "";
		flex: 1;
		height: 1px;
		width: 55px;
		background-color: ${({ theme }) => theme.color.offWhite};
	}
`;

export const RegisterLoginTitle = styled.h4`
	font-size: 15px;
	line-height: 150%;
	color: ${({ theme }) => theme.color.offWhite};
	text-align: center;
	width: 100%;
`;
