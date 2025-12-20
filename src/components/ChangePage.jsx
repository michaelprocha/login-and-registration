import { RegisterLoginTitle } from "../styles/components/Text.styled."
import { FlexContainer } from "../styles/components/Container.styled"
import LinkLoginRegister from "./LinkLoginRegister"

function ChangePage({direction, textAccounts, image, textLink}) {
  return (
    <FlexContainer $direction={direction === "row" ? "row" : "column"}>
        <RegisterLoginTitle>{textAccounts}</RegisterLoginTitle>
        <LinkLoginRegister textLink={textLink} image={image} />
    </FlexContainer>
  )
}

export default ChangePage