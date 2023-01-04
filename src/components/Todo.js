import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./common/Button";
import TodoCreate from "./TodoCreate";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";
// [] 1. 한페이지에서 리스트와 상세 동시에 볼 수 있어야 함
// [] 2. 투두리스트 내용, 완료여부 표시
// [] 3. 입력창, 추가버튼이 있고 버튼 누르면 입력창 내용이 새로운 투두리스트로 추가
// [] 4. 투두리스트 수정, 삭제기능
// [] 5. 개별아이템 우측에 수정버튼, 누르면 수정모드 활성화
// [] 7. 투두리스트 개별아이템 우측에 삭제버튼
const TodoBox = styled.div`
  width: 50%;
`;

const Todo = () => {
  const [refresh, setRefresh] = useState(0);
  const accessToken = localStorage.getItem('todo_accessToken');
  const navigate = useNavigate();
  const { "*" : curParams} = useParams();
  useEffect(() => {
    if(!accessToken) {
      navigate('/auth');
    };
  }, [accessToken, refresh])

  const handleLogout = () => {
    //로컬스토리지에 저장된 토큰을 삭제
    window.localStorage.removeItem("todo_accessToken");
    alert('로그아웃 되었습니다.');
    navigate('/auth');
  }

  const refresher = () => {
    setRefresh(refresh * -1);
  };

  return (
    <TodoBox>
      <h2>Todo List</h2>
      <div>
        <TodoList refresher={refresher} refresh={refresh} />
        <Button onClick={handleLogout} styles="link">로그아웃</Button>
      </div>
      {
        curParams ? 
      <TodoDetail curParams={curParams} 
      refresher={refresher} refresh={refresh} /> : null
      }
      <TodoCreate refresher={refresher}/>
    </TodoBox>
  )
};

export default Todo;
