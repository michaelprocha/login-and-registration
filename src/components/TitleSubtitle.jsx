import { FlexContainer } from "../styles/components/Container.styled";
import { TitleForm, SubTitleForm } from "../styles/components/Text.styled.";

function TitleSubtitle({ textTitle, textSubtitle }) {
	return (
		<FlexContainer $direction={"column"} $gap={"24px"}>
			<TitleForm>{textTitle}</TitleForm>
			<SubTitleForm>{textSubtitle}</SubTitleForm>
		</FlexContainer>
	);
}

export default TitleSubtitle;
