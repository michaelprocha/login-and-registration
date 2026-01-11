import { Checkbox } from "../styles/components/Input.styled."
import { CheckIcon } from "../styles/components/Icon.styled."

function CheckboxJsx({checked}) {
  return (
    <Checkbox>
      <CheckIcon $checked={checked} />
    </Checkbox>
  )
}

export default CheckboxJsx;