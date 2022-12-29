import React from 'react';
import styled, { css } from 'styled-components';

const BUTTON_STYLE = {
  login: css`
    --background-color: #0095f6;
    --color: #ffffff;
    --padding: 8px 0;
    --width: 100%;
    --hover: .8;
  `,
  link: css`
    --background-color: transparent;
    --color: black;
    --padding: 4px;
    --hover: underline;
  `,
};
const StyledBtn = styled.button`
  ${props => props.buttonStyle}
  width: var(--width);
  border: none;
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--color);
  padding: var(--padding);
  cursor: pointer;

  &:hover {
    opacity: var(--hover);
    text-decoration: var(--hover);
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;
    background: #dc3545 #025ce2;
  }
`;
const Button = ({ children, styles, onClick, disabled, type }) => {
  const buttonStyle = BUTTON_STYLE[styles]
  return (
    <>
      <StyledBtn 
      buttonStyle={buttonStyle} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
      >
        {children}
      </StyledBtn>
    </>
  )
}

export default Button;
