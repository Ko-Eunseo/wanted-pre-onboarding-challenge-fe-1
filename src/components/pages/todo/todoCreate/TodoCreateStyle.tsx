import styled from 'styled-components';
export const CreateTitle = styled.header`
  display: flex;
  justify-content: space-between;
  color: #171e71;
  border-bottom: 2px solid #cb5917;
  h3 {
    text-align: left;
    font-size: 1.2rem;
    margin-left: 8px;
  }
`;
export const CreateForm = styled.form`
  background: #f0ede6;
  border-radius: 8px;
  padding: 16px;
  > input {
    margin-top: 16px;
  }
  @media screen and (max-width: 700px) {
    box-shadow: 0px -5px 4px -2px rgba(163,163,163,0.49);
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 4px;
  margin: 4px 0;
  padding: 8px;
`;
