import styled, { css } from 'styled-components';

export const BORDER = {
  border: css`
    --input-border: 1px solid #eeeeee;
  `,
  transparent: css`
    --input-border: none;
  `,
};

export const InputStyle = styled.input<{borderStyle:string}>`
  ${props => props.borderStyle};
  margin: 4px 0;
  padding: 8px;
  border: var(--input-border);
  width: 100%;
  border-radius: 4px;
`;