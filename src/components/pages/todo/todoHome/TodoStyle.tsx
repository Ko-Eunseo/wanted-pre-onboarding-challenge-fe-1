import styled from "styled-components";
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 1rem;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    position: relative;
    height: 90vh;
  }
`;
export const Footer = styled.footer`
  border-top: 5px double #cb5917;
  padding-bottom: 16px;
  text-align: center;
  @media screen and (max-width: 700px) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 16px;
  }
`;
export const TodoBox = styled.div`
  background: #f0ede6;
  border-radius: 8px;
  flex: 1;
  padding: 16px;
  min-height: 500px;
  max-width: 400px;
  margin-right: 16px;
  @media screen and (max-width: 700px) {
    margin-right: 0;
    max-width: 100%;
  }
`;
export const TodoHandleBox = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;
  @media screen and (max-width: 700px) {
    box-shadow: 0px -5px 4px -2px rgba(163, 163, 163, 0.49);
    border-radius: 8px;
    position: absolute;
    bottom: 46px;
    width: 100%;
    max-width: 100%;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px 4px;
  color: #171e71;
  button svg {
    font-size: 1.2rem;
  }
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  margin-left: 8px;
`;
export const Article = styled.article`
  border-top: 5px double #cb5917;
  min-height: 400px;
`;
