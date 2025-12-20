import { LabelCheckBox } from "../styles/components/Label.styled.";
import { HiddenCheckbox } from "../styles/components/Input.styled."
import CheckboxJsx from "./Checkbox";
import { useState } from "react";
import { ForgotPassword } from "../styles/components/Link.styled.";

function LabelCheckBoxJsx({hasLink}) {
	const [checked, setChecked] = useState(false);

	return (
		<LabelCheckBox>
			<HiddenCheckbox onChange={() => setChecked(!checked)}/>
			<CheckboxJsx checked={checked} />
			Lembrar-me
			{hasLink && <ForgotPassword/>}
		</LabelCheckBox>
	);
}

export default LabelCheckBoxJsx;
