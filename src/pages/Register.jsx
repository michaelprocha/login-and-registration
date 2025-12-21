import { Main, FlexContainer, FlexForm } from "../styles/components/Container.styled";
import ImageRegister from "../components/ImageRegister";
import TitleSubtitle from "../components/TitleSubtitle";
import InputField from "../components/InputField";
import { Button } from "../styles/components/Button.styled";
import { AccountsParagraph } from "../styles/components/Text.styled.";
import LinkAccount from "../components/LinkAccount";
import ChangePage from "../components/ChangePage";

function Register() {
	return (
		<Main>
			<ImageRegister />
			<FlexContainer $direction={"column"} $gap={"24px"} $pTablet="0 0" $padding="0 46px">
				<FlexContainer $direction={"column"} $gap={"32px"}>
					<FlexForm $direction={"column"} $gap={"32px"}>
						<TitleSubtitle textTitle={"Cadastro"} textSubtitle={"Olá! Preencha seus dados."} />
						<FlexContainer $direction={"column"} $gap={"16px"}>
							<InputField textLabel={"Nome"} />
							<InputField textLabel={"Email"} type={"email"} />
							<InputField textLabel={"Senha"} type={"password"} checkbox={true} />
						</FlexContainer>
						<Button>Cadastrar</Button>
					</FlexForm>
					<FlexContainer $direction={"column"} $gap={"8px"}>
						<AccountsParagraph>ou entre com outras contas</AccountsParagraph>
						<FlexContainer $gap={"24px"} $justify={"center"}>
							<LinkAccount textIcon={"Github"} icon={"gitHub"} />
							<LinkAccount textIcon={"Google"} icon={"google"} />
						</FlexContainer>
					</FlexContainer>
				</FlexContainer>
				<ChangePage
					direction={"row"}
					gap={"8px"}
					textLink={"Faça seu login!"}
					textAccounts={"Já tem conta?"}
					justify={"flex-start"}
					image={"register"}
                    full={"fit"}
                    directionM={"column"}
				/>
			</FlexContainer>
		</Main>
	);
}

export default Register;
