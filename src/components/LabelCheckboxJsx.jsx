import { LabelCheckBox } from "../styles/components/Label.styled.";
import { HiddenCheckbox } from "../styles/components/Input.styled.";
import CheckboxJsx from "./Checkbox";
import { useState } from "react";
import { ForgotPassword } from "../styles/components/Link.styled.";
import { FlexContainer } from "../styles/components/Container.styled";

function LabelCheckBoxJsx({ hasLink }) {
	const [checked, setChecked] = useState(false);

	return (
		<FlexContainer $justify={"space-between"} >
			<LabelCheckBox>
				<HiddenCheckbox onChange={() => setChecked(!checked)} />
				<CheckboxJsx checked={checked} />
				Lembrar-me
			</LabelCheckBox>
			{hasLink && <ForgotPassword>Esqueci a senha</ForgotPassword>}
		</FlexContainer>
	);
}

export default LabelCheckBoxJsx;
