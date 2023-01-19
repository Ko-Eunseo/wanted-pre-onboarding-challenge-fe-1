import styled from "styled-components";

export const IconButtonStyle = styled.button`
  position: relative;
  line-height: 1;
  svg {
    font-size: 1rem;
    transition: 0.2s all ease-in;
  }
  &:focus-visible::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border: 0.1rem solid #171e71;
    border-radius: 0.3rem;
  }
`;
