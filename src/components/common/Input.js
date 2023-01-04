import React from 'react';
import styled, { css } from 'styled-components';

const BORDER = {
  border: css`
    --input-border: 1px solid #eeeeee;
  `,
  transparent: css`
    --input-border: none;
  `,
};

const InputStyle = styled.input`
  ${props => props.borderStyle};
  margin: 4px 0;
  padding: 8px;
  border: var(--input-border);
  width: 100%;
  border-radius: 4px;
`;

const Input = ({ name, id, type, onChange, placeholder, border, value }) => {
  const borderStyle = BORDER[border];
  return (
    <>
      <label htmlFor={id}></label>
      <InputStyle 
      id={id} 
      name={name}
      type={type ? type : 'text'} 
      onChange={onChange} 
      placeholder={placeholder} 
      borderStyle={borderStyle}
      value={value}
      />
    </>
  )
}

export default Input;
