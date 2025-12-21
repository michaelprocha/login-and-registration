import { RegisterLoginTitle } from "../styles/components/Text.styled."
import { FlexContainer } from "../styles/components/Container.styled"
import LinkLoginRegister from "./LinkLoginRegister"

function ChangePage({direction, textAccounts, image, textLink, gap, justify, full, directionM}) {
    const width = full ? "100%" : "fit";

  return (
    <FlexContainer $direction={direction === "row" ? "row" : "column"} $gap={gap} $directionM={directionM}>
        <RegisterLoginTitle $width={full} >{textAccounts}</RegisterLoginTitle>
        <LinkLoginRegister textLink={textLink} image={image} justify={justify}/>
    </FlexContainer>
  )
}

export default ChangePage