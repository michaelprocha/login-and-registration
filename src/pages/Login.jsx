import { Main, FlexContainer, FlexForm } from "../styles/components/Container.styled";
import ImageLogin from "../components/ImageLogin";
import ChangePage from "../components/ChangePage";
import TitleSubtitle from "../components/TitleSubtitle";
import InputField from "../components/InputField";
import { Button } from "../styles/components/Button.styled";
import { AccountsParagraph } from "../styles/components/Text.styled."
import LinkAccount from "../components/LinkAccount"

function Login() {

	const sendForm = (e) => {
		e.preventDefault();
	}

	return (
		<Main>
			<ImageLogin />
			<FlexContainer $direction="column" $padding="0 46px" $gap="24px">
				<FlexForm onSubmit={(e) => sendForm(e)} $direction="column" $padding="0 0" $gap="32px">
					<FlexContainer $direction="column" $padding="0 0" $gap="40px">
						<TitleSubtitle textTitle={"Login"} textSubtitle={"Boas-vindas! Faça seu login."} />
						<FlexContainer $direction="column" $padding="0 0" $gap="16px">
							<InputField textLabel={"Email ou usuário"}/>
							<InputField textLabel={"Senha"} type={"password"} checkbox={true} hasLink={true} />
						</FlexContainer>
					</FlexContainer>
					<Button>Login</Button>
					<FlexContainer $direction={"column"} $gap={"8px"}>
						<AccountsParagraph>ou entre com outras contas</AccountsParagraph>
						<FlexContainer $gap={"24px"} $justify={"center"} >
							<LinkAccount icon={"gitHub"} textIcon={"Github"} />
							<LinkAccount icon={"google"} textIcon={"Google"} />
						</FlexContainer>
					</FlexContainer>
				</FlexForm>
				<FlexContainer $direction="column" $items="center">
					<ChangePage
						direction={"column"}
						textAccounts={"Ainda não tem conta?"}
						image={"register"}
						textLink={"Crie seu cadastro!"}
						gap={"8px"}
						justify={"center"}
					/>
				</FlexContainer>
			</FlexContainer>
		</Main>
	);
}

export default Login;
