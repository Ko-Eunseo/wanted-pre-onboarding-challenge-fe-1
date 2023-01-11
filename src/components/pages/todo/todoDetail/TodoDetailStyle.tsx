import styled from "styled-components";
export const TodoDetailBox = styled.section`
  background: #f0ede6;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 16px;
`;
export const TodoTitle = styled.header`
  display: flex;
  border-bottom: 1px solid #eeeeee;
  padding: 8px 16px;
  justify-content: space-between;
  border: 2px solid #cb5917;
  border-left: 0;
  border-right: 0;
  align-items: center;
  color: #171e71;
  h3 {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 701px) and (max-width: 800px) {
    h3 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 150px;
    }
  }
`;
export const EditBox = styled.div`
  svg {
    margin-top: 4px;
    &:first-of-type {
      margin-right: 8px;
    }
  }
`;
export const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #cb5917;
  opacity: 0.8;
  background-position: center;
  background-image:  linear-gradient(#cb5917 1px, transparent 1px), linear-gradient(to right, #cb5917 1px, transparent 1px);
  background-size: 1.5rem 1.5rem;
  p {
    margin: 16px 8px;
    text-align: left;
    font-weight: 500;
  }
  svg {
    margin: 0 8px;
  }
`;