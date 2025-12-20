import styled from "styled-components";

export const ForgotPassword = styled.a`
    font-size: 15px;
    color: ${({theme}) => theme.color.offWhite};
    text-decoration: underline;
    cursor: pointer;
`;

export const LinkAccounts = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    font-size: 12.5px;
    color: ${({theme}) => theme.color.offWhite};
    height: 100%;
    cursor: pointer;
`;

export const LoginRegisterLink = styled.a`
    color: ${({theme}) => theme.color.highlightGreen};
    font-size: 18px;
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : "row"};
    justify-content: ${({justify}) => justify ? justify : "flex-start"};
    gap: 8px;
    cursor: pointer;
    width: 100%;
`;