import { LoginRegisterLink } from "../styles/components/Link.styled."
import { LoginIcon, RegisterIcon } from "../styles/components/Icon.styled."

function LinkLoginRegister({textLink, image, justify}) {
	const to = image === "login" ? "/login" : "/register";

	return (
		<LoginRegisterLink justify={justify} to={to}>
			{textLink}
			{image === "login" ? <LoginIcon/> : <RegisterIcon/>}
		</LoginRegisterLink>
	);
}

export default LinkLoginRegister;
