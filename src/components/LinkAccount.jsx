import { LinkAccounts } from "../styles/components/Link.styled.";
import { GitHubIcon, GoogleIcon } from "../styles/components/Icon.styled.";

function LinkAccount({ icon, textIcon }) {
	return (
		<LinkAccounts>
			{icon === "gitHub" ? <GitHubIcon /> : <GoogleIcon />}
			{textIcon}
		</LinkAccounts>
	);
}

export default LinkAccount;
