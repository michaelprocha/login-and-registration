import { Picture, LoginImgDesktop, LoginImgTablet, LoginImgMobile } from "../styles/components/Image.styled.";

function ImageLogin() {
	return (
		<Picture>
			<LoginImgDesktop />
			<LoginImgTablet />
			<LoginImgMobile />
		</Picture>
	);
}

export default ImageLogin;
