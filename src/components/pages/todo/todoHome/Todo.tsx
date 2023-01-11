import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {AiFillPlusSquare, AiFillCloseSquare} from 'react-icons/ai';
import TodoCreate from "../todoCreate/TodoCreate";
import TodoDetail from "../todoDetail/TodoDetail";
import TodoList from "../todoList/TodoList";
import Button from "../../../common/button/Button";
import * as TodoStyle from './TodoStyle';

const Todo = () => {
  const [addMode, setAddMode] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const accessToken = localStorage.getItem('todo_accessToken');
  const navigate = useNavigate();
  const { "*" : curParams} = useParams();
  useEffect(() => {
    if(!accessToken) {
      window.location.href = "/auth";
    };
  }, [accessToken, navigate, refresh]);

  const handleLogout = () => {
    window.localStorage.removeItem("todo_accessToken");
    alert('로그아웃 되었습니다.');
    window.location.href = "/auth";
    window.location.reload();
  };

  const refresher = () => {
    setRefresh(refresh * -1);
  };

  const handleAddMode = () => {
    setAddMode(!addMode);
  };

  return (
    <TodoStyle.Wrap>
      <TodoStyle.TodoBox>
        <TodoStyle.Header>
          <TodoStyle.Title>Todo List</TodoStyle.Title>
          {
            addMode ?
            <AiFillCloseSquare onClick={handleAddMode}/>
            :
            <AiFillPlusSquare onClick={handleAddMode}/>
          }
        </TodoStyle.Header>
        <TodoStyle.Article>
          <TodoList refresher={refresher} refresh={refresh} />
        </TodoStyle.Article>
        <TodoStyle.Footer>
          <Button onClick={handleLogout} styles="link" type="button">로그아웃</Button>
        </TodoStyle.Footer>
      </TodoStyle.TodoBox>
      <TodoStyle.TodoHandleBox>
        {curParams ?
          <TodoDetail curParams={curParams}
          refresher={refresher} refresh={refresh} /> : null}
        {addMode ?
          <TodoCreate refresher={refresher} handleAddMode={handleAddMode}/>
          : null
        }
      </TodoStyle.TodoHandleBox>
    </TodoStyle.Wrap>
  )
};

export default Todo;
