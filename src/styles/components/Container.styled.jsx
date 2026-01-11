import styled from "styled-components";

export const Main = styled.main`
	height: 100%;
	width: 100%;
	max-width: 996px;
	max-height: 795px;
	background-color: ${({ theme }) => theme.color.darkGray};
	border: solid 1px ${({ theme }) => theme.color.graphite};
	border-radius: 32px;
	padding: 56px 78px;
	display: flex;
	gap: 23px;

	@media (max-width: 1180px) {
		flex-direction: column;
		max-width: 705px;
		max-height: 1234px;
		align-items: flex-start;
		padding: 56px 84px;
		margin: 50px 0;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		max-width: 328px;
		max-height: 1187px;
		align-items: flex-start;
		padding: 32px 16px;
		margin: 50px 0;
	}
`;

export const FlexContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: ${({ $direction }) => ($direction ? $direction : "row")};
	gap: ${({ $gap }) => ($gap ? $gap : "0")};
	justify-content: ${({ $justify }) => ($justify ? $justify : "flex-start")};
	align-items: ${({ $align }) => ($align ? $align : "flex-start")};
	padding: ${({ $padding }) => ($padding ? $padding : "0 0")};

	@media (max-width: 1180px) {
		padding: ${({$pTablet}) => ($pTablet ? $pTablet : "0 0")};
	}

	@media (max-width: 768px) {
		padding: 0 0;
		flex-direction: ${({$directionM, $direction}) => $directionM ? $directionM : $direction};
	}
`;

export const FlexForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: ${({ $direction }) => ($direction ? $direction : "row")};
	gap: ${({ $gap }) => ($gap ? $gap : "0")};
	justify-content: ${({ $justify }) => ($justify ? $justify : "flex-start")};
	align-items: ${({ $align }) => ($align ? $align : "flex-start")};
	padding: ${({ $padding }) => ($padding ? $padding : "0 0")};

	@media (max-width: 1180px) {
		padding: 0;
	}
`;
