// [] 1. /todo에 접속시 투두리스트 목록 read
// [] 2. 투두리스트 내용, 완료여부 표시
// [] 3. 입력창, 추가버튼이 있고 버튼 누르면 입력창 내용이 새로운 투두리스트로 추가
// [] 4. 투두리스트 수정, 삭제기능
// [] 5. 개별아이템 우측에 수정버튼, 누르면 수정모드 활성화
// [] 6. 수정모드에서 개별아이템의 우측에 제출버튼과 취소버튼 표시
// [] 7. 투두리스트 개별아이템 우측에 삭제버튼

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";

const Todo = () => {
  const accessToken = localStorage.getItem('todo_accessToken');
  const navigate = useNavigate();
  useEffect(() => {
    if(!accessToken) {
      navigate('/auth');
    };
  }, [accessToken])
  const handleLogout = () => {
    window.localStorage.removeItem("todo_accessToken");
    navigate('/auth');
  }
  return (
    <>
      <h2>Todo List</h2>
      <div>
        <Button onClick={handleLogout} styles="link">로그아웃</Button>
      </div>
    </>
  )
};

export default Todo;
