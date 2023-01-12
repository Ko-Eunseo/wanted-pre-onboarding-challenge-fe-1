import styled from "styled-components";
export const Form = styled.form`
  > div > div {
    padding: 0;
  }
`;
export const EditTitle = styled.header`
  color: #171e71;
  border-bottom: 2px solid #cb5917;
  margin-bottom: 8px;
  h3 {
    font-size: 1.2rem;
  }
`;
export const TodoTitle = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
`;
export const ButtonBox = styled.div`
  display: flex;
  margin-top: 8px;
  button:first-of-type {
    margin-right: 8px;
  }
`;