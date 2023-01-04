import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {AiFillPlusSquare, AiFillCloseSquare} from 'react-icons/ai';
// FaWindowClose
import styled from "styled-components";
import Button from "./common/Button";
import TodoCreate from "./TodoCreate";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";
const Wrap = styled.div`
  display: flex;
  width: 80%;
  margin-top: 1rem;
`;
const TodoBox = styled.div`
  flex: 1;
  background: #f0ede6;
  border-radius: 8px;
  padding: 16px;
  min-height: 500px;
  max-width: 400px;
  margin-right: 16px;
`;
const TodoHandleBox = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;
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
`;
const Article = styled.article`
  border: 5px double #cb5917;
  border-left: 0;
  border-right: 0;
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
  }, [accessToken, refresh]);

  const handleLogout = () => {
    //로컬스토리지에 저장된 토큰을 삭제
    window.localStorage.removeItem("todo_accessToken");
    alert('로그아웃 되었습니다.');
    navigate('/auth');
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
        <Button onClick={handleLogout} styles="link">로그아웃</Button>
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
