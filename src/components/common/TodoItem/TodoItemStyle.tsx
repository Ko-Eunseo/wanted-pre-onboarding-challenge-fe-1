import styled from "styled-components";

export const TodoItemBox = styled.li`
  cursor: pointer;
  width: 100%;
  margin: 4px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 8px;
  justify-content: space-between;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #cb5917;
  }
  &:focus-visible {
    border: 0.1rem solid #025ce2;
    border-radius: 0.5rem;
    &::after {
      border-bottom: none;
    }
  }
`;

export const TodoTitle = styled.header`
  display: flex;
  margin: 4px;
  align-items: center;
  h2 {
    flex: 1;
    font-size: 1rem;
    margin-left: 4px;
  }
`;
