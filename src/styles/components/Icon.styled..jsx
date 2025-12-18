import styled from "styled-components";
import checkImg from '../../assets/icons/checkedIcon.svg';
import registerImg from '../../assets/icons/assignment.svg';
import gitHubImg from '../../assets/icons/Github.svg';
import googleImg from '../../assets/icons/Google.svg';
import loginImg from '../../assets/icons/login.svg';

export const CheckIcon = styled.img.attrs(({checked}) => ({src: checked ? checkImg : undefined, "aria-hidden": true}));

export const RegisterIcon = styled.img.attrs({"src": registerImg, "aria-hidden": true});

export const GitHubIcon = styled.img.attrs({"src": gitHubImg, "aria-hidden": true});

export const GoogleIcon = styled.img.attrs({"src": googleImg, "aria-hidden": true});

export const LoginIcon = styled.img.attrs({"src": loginImg, "aria-hidden": true});