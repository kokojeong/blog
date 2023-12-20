import styled, { css } from "styled-components";
// yarn add styled-components 나 npm install styled-components

import palette from "../styles/palette";

const StyledButton = styled.button
`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.Gray[8]};
    &:hover{
        background: ${palette.Gray[6]};
    }
    ${props =>
        props.fullWidth &&
        css
        `
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size:1.125rem;
        `}
    ${props =>
        props.cyan &&
        css
        `
            background: ${palette.Cyan[5]};
            &:hover{
                background: ${palette.Cyan[4]};
            }
        `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
    