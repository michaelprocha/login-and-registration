import styled from "styled-components";

const Label = styled.label`
    color: ${({theme}) => theme.color.offWhite};
`;

export const LabelText = styled(Label)`
    font-size: 18px;
`;

export const LabelCheckBox = styled(Label)`
    font-size: 15px;
    display: flex;
    gap: 8px;
`;

