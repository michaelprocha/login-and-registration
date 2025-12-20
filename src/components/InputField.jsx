import { FlexContainer } from "../styles/components/Container.styled"
import { LabelText } from "../styles/components/Label.styled."
import { InputText } from "../styles/components/Input.styled."
import LabelCheckBoxJsx from "./LabelCheckboxJsx"

function InputField({textLabel, type = "text", checkbox = false, hasLink = false}) {
  console.log(type)

  return (
    <FlexContainer $direction={"column"} $gap={"8px"}>
        {checkbox ? <>
            <LabelText>{textLabel}</LabelText>
            <InputText $type={type} />
            <LabelCheckBoxJsx hasLink={hasLink}/></> 
            :
            <><LabelText>{textLabel}</LabelText>
            <InputText $type={type} /></>
        } 
    </FlexContainer>
  )
}

export default InputField;