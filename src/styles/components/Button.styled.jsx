import styled from "styled-components";

export const Button = styled.button`
    width: 317px;
    height: 51px;
    background-color: ${({theme}) => theme.color.highlightGreen};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.color.petrolGreen};
    gap: 2px;
    border: solid 1px ${({theme}) => theme.color.highlightGreen};
    border-radius: 8px;
    font-size: 18px;
    font-weight: medium;

    &:hover{
        background-color: transparent;
        color: ${({theme}) => theme.color.highlightGreen};
    }
`;