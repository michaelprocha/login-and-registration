import { LoginRegisterLink } from "../styles/components/Link.styled."
import { LoginIcon, RegisterIcon } from "../styles/components/Icon.styled."

function LinkLoginRegister({textLink, image, justify}) {
	return (
		<LoginRegisterLink justify={justify}>
			{textLink}
			{image === "login" ? <LoginIcon /> : <RegisterIcon />}
		</LoginRegisterLink>
	);
}

export default LinkLoginRegister;
