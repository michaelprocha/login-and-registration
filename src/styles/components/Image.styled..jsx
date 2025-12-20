import styled from "styled-components";
import loginImgDesktop from '../../assets/images/IMG1_Desktop.png';
import loginImgMobile from '../../assets/images/IMG1_Mobile.png';
import loginImgTablet from '../../assets/images/IMG1_Tablet.png';
import registerImgDesktop from '../../assets/images/IMG2_Desktop.png';
import registerImgMobile from '../../assets/images/IMG2_Mobile.png';
import registerImgTablet from '../../assets/images/IMG2_Tablet.png';

export const Picture = styled.picture.attrs({
    "aria-hidden": true
})``;


export const LoginImgDesktop = styled.source.attrs({
    media: "(min-width: 1200px)", 
    srcSet: loginImgDesktop
})``;

export const LoginImgTablet = styled.source.attrs({
    media: "(min-width: 768px)", 
    srcSet: loginImgTablet
})``;

export const LoginImgMobile = styled.img.attrs({
    src: loginImgMobile
})``;


export const RegisterImgDesktop = styled.source.attrs({
    media: "(min-width: 1200px)", 
    srcSet: registerImgDesktop
})``;

export const RegisterImgTablet = styled.source.attrs({
    media: "(min-width: 768px)", 
    srcSet: registerImgTablet
})``;

export const RegisterImgMobile = styled.img.attrs({
    src: registerImgMobile

})``;