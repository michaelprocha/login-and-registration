import { Main, FlexContainer } from "../styles/components/Container.styled";
import ImageLogin from "../components/ImageLogin";
import ChangePage from "../components/ChangePage";
import TitleSubtitle from "../components/TitleSubtitle";
import InputField from "../components/InputField";

function Login() {
	return (
		<Main>
			<ImageLogin />
			<FlexContainer $direction="column" $padding="0 46px" $gap="24px">
				<FlexContainer $direction="column" $padding="0 0" $gap="32px">
					<FlexContainer $direction="column" $padding="0 0" $gap="40px">
						<TitleSubtitle title={"Login"} subTitle={"Boas-vindas! Faça seu login."} />
						<FlexContainer $direction="column" $padding="0 0" $gap="40px"></FlexContainer>
					</FlexContainer>
				</FlexContainer>
				<FlexContainer $direction="column" $items="center" $padding="0 0" $gap="8px">
					<ChangePage
						direction={"column"}
						textAccounts={"Ainda não tem conta?"}
						image={"register"}
						textLink={"Crie seu cadastro!"}
					/>
				</FlexContainer>
			</FlexContainer>
		</Main>
	);
}

export default Login;
