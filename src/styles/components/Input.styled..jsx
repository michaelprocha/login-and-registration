import styled from "styled-components";

export const InputText = styled.input.attrs(({$type}) => ({
  type: $type ? $type : "text"
  }))`
    width: 317px;
    height: 39px;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.color.mediumGray};
    font-size: 15px;
    color: ${({theme}) => theme.color.darkGray};
    border-radius: 4px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const Checkbox = styled.span`
    display: flex;
    width: 24px;
    height: 24px;
    border: solid 2px ${({theme}) => theme.color.mediumGray};
    background-color: transparent;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

