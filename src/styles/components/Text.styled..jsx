import styled from "styled-components";

export const TitleForm = styled.h1`
    font-size: 31px;
    line-height: 150%;
    color: ${({theme}) => theme.color.offWhite};
    font-weight: 500;
`;

export const SubTitleForm = styled.h2`
    font-size: 22px;
    line-height: 150%;
    color: ${({theme}) => theme.color.offWhite};
`;

export const AccountsParagraph = styled.p`
    font-size: 15px;
    line-height: 150%;
    color: ${({theme}) => theme.color.offWhite};

    &::after{
        content: "";
        height: 1px;
        width: 55px;
    }

    &::before{
        content: "";
        height: 1px;
        width: 55px;
    }
`;

export const RegisterLoginTitle = styled.h4`
    font-size: 15px;
    line-height: 150%;
    color: ${({theme}) => theme.color.offWhite};
    text-align: center;
    width: 100%
`;