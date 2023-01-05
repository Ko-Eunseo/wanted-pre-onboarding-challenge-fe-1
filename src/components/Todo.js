import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {AiFillPlusSquare, AiFillCloseSquare} from 'react-icons/ai';
import styled from "styled-components";
import Button from "./common/Button";
import TodoCreate from "./TodoCreate";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  border-radius: 8px;
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    position: relative;
    height: 90vh;
  }
`;
const Footer = styled.footer`
  border-top: 5px double #cb5917;
  padding-bottom: 16px;
  @media screen and (max-width: 700px) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 16px;
  }
`;
const TodoBox = styled.div`
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
const TodoHandleBox = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;
  @media screen and (max-width: 700px) {
    box-shadow: 0px -5px 4px -2px rgba(163,163,163,0.49);
    border-radius: 8px;
    position: absolute;
    bottom: 46px;
    width: 100%;
    max-width: 100%;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px 4px;
  color: #171e71;
  svg {
    font-size: 1.2rem;
    transition: 0.2s all ease-in;
    &:hover {
      transform: rotate(90deg);
    }
  }
`;
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  margin-left: 8px;
`;
const Article = styled.article`
  border-top: 5px double #cb5917;
  min-height: 400px;

`;

const Todo = () => {
  const [addMode, setAddMode] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const accessToken = localStorage.getItem('todo_accessToken');
  const navigate = useNavigate();
  const { "*" : curParams} = useParams();
  useEffect(() => {
    if(!accessToken) {
      navigate('/auth');
    };
  }, [accessToken, navigate, refresh]);

  const handleLogout = () => {
    //로컬스토리지에 저장된 토큰을 삭제
    window.localStorage.removeItem("todo_accessToken");
    alert('로그아웃 되었습니다.');
    navigate('/auth');
    window.location.reload();
  };

  const refresher = () => {
    setRefresh(refresh * -1);
  };

  const handleAddMode = () => {
    setAddMode(!addMode);
  };

  return (
    <Wrap>
      <TodoBox>
        <Header>
          <Title>Todo List</Title>
          {
            addMode ?
            <AiFillCloseSquare onClick={handleAddMode}/>
            :
            <AiFillPlusSquare onClick={handleAddMode}/>
          }
        </Header>
        <Article>
          <TodoList refresher={refresher} refresh={refresh} />
        </Article>
        <Footer>
          <Button onClick={handleLogout} styles="link">로그아웃</Button>
        </Footer>
      </TodoBox>
      <TodoHandleBox>
        {curParams ?
          <TodoDetail curParams={curParams}
          refresher={refresher} refresh={refresh} /> : null}
        {addMode ?
          <TodoCreate refresher={refresher} handleAddMode={handleAddMode}/>
          : null
        }
      </TodoHandleBox>
    </Wrap>
  )
};

export default Todo;
