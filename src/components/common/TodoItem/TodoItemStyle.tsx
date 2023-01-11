import styled from "styled-components";

export const TodoItemBox = styled.li`
  cursor: pointer;
  width: 100%;
  border-bottom: 2px solid #cb5917;
  margin: 4px auto;
  display: flex;
  align-items: center;
  padding-left: 8px;
  justify-content: space-between;
`;

export const TodoTitle = styled.header`
  display: flex;
  margin: 4px;
  align-items: center;
  h2 {
    font-size: 1rem;
    margin-left: 4px;
  }
`;