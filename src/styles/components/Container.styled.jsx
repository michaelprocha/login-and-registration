import styled from "styled-components";

export const Main = styled.main`
    height: 100%;
    width: 100%;
    max-width: 996px;
    max-height: 748px;
    background-color: ${({theme}) => theme.color.darkGray};
    border: solid 1px ${({theme}) => theme.color.graphite};
    border-radius: 32px;
    padding: 56px 78px;
    display: flex;
    gap: 23px;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({$direction}) => $direction ? $direction : "row"};
    gap: ${({$gap}) => $gap ? $gap : "0"};
    justify-content: ${({$justify}) => $justify ? $justify : "flex-start"};
    align-items: ${({$align}) => $align ? $align : "flex-start"};
    padding: ${({$padding}) => $padding ? $padding : "0 0"};
`;