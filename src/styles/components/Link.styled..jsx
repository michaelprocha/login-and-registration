import styled from "styled-components";
import { Link } from "react-router";

export const ForgotPassword = styled(Link)`
    font-size: 15px;
    color: ${({theme}) => theme.color.offWhite};
    text-decoration: underline;
    cursor: pointer;
`;

export const LinkAccounts = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    font-size: 12.5px;
    color: ${({theme}) => theme.color.offWhite};
    min-height: 55px;
    cursor: pointer;
`;

export const LoginRegisterLink = styled(Link)`
    color: ${({theme}) => theme.color.highlightGreen};
    font-size: 18px;
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : "row"};
    justify-content: ${({justify}) => justify ? justify : "flex-start"};
    gap: 8px;
    cursor: pointer;
    width: 100%;
`;