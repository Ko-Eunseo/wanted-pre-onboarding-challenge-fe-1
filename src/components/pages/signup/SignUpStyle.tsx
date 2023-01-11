import styled from "styled-components";
export const Wrap = styled.div`
  max-width: 400px;
  width: 50%;
  margin: 16px auto 0;
  background: #f0ede6;
  padding: 16px;
  border-radius: 5px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #171e71;
  border-bottom: 2px solid #cb5917;
  h1 {
    margin-left: 8px;
    font-size: 1.5rem;
  }
`;
export const SignUpBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  span {
    color: red;
    font-size: 0.8rem;
  }
  > button {
    margin-top: 8px;
  }
`;