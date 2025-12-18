import styled from "styled-components";

export const ForgotPassword = styled.a`
    font-size: 15px;
    color: ${({theme}) => theme.color.offWhite};
    text-decoration: underline;
`;

export const linkAccounts = styled.a`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const LoginRegisterLink = styled.a`
    color: ${({theme}) => theme.color.highlightGreen};
    font-size: 18px;
    display: flex;
    gap: 2px;
`;