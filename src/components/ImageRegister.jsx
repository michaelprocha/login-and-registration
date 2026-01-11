import { Picture } from "../styles/components/Image.styled."
import { RegisterImgDesktop, RegisterImgTablet, RegisterImgMobile } from "../styles/components/Image.styled."

function ImageRegister() {
  return (
    <Picture>
        <RegisterImgDesktop/>
        <RegisterImgTablet/>
        <RegisterImgMobile/>
    </Picture>
  )
}

export default ImageRegister;