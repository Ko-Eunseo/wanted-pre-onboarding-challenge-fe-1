import styled from 'styled-components';

export const LoginBox = styled.div`
  margin-top: 16px;
  max-width: 400px;
  width: 50%;
  background: #f0ede6;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.h1`
  font-size: 1.5rem;
  color: #171e71;
  border-bottom: 2px solid #cb5917;
  width: 100%;
`;
export const InputBox = styled.form`
  width: 100%;
  margin: 16px 0;
  > button {
    margin-top: 8px;
  }
`;

export const AlertMessage = styled.span`
  font-size: 0.8rem;
  color: tomato;
`;
export const LinkBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
`;