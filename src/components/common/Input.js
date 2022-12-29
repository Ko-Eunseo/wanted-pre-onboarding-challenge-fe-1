import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  margin: 4px 0;
  padding: 8px;
  border: 1px solid #eeeeee;
  width: 100%;
  border-radius: 4px;
`;

const Input = ({ id, type, onChange, placeholder }) => {
  return (
    <>
      <label htmlFor={id}></label>
      <InputStyle id={id} type={type ? type : 'text'} onChange={onChange} placeholder={placeholder} />
    </>
  )
}

export default Input;
