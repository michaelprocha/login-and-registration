import { LoginRegisterLink } from "../styles/components/Link.styled."
import { LoginIcon, RegisterIcon } from "../styles/components/Icon.styled."

function LinkLoginRegister({textLink, image}) {
	return (
		<LoginRegisterLink>
			{textLink}
			{image === "login" ? <LoginIcon /> : <RegisterIcon />}
		</LoginRegisterLink>
	);
}

export default LinkLoginRegister;
