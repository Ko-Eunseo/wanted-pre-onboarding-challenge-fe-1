import { useEffect, useState } from "react";
import styled from "styled-components";
import { getTodos } from "./api/TodoApi";
import TodoItem from "./common/TodoItem";
// [v] 1. /todo에 접속시 투두리스트 목록 read
// [] 2. 투두리스트 내용, 완료여부 표시
// [v] 3. 입력창, 추가버튼이 있고 버튼 누르면 입력창 내용이 새로운 투두리스트로 추가
// [v] 4. 투두리스트 수정, 삭제기능
// [v] 5. 개별아이템 우측에 수정버튼, 누르면 수정모드 활성화
// [v] 6. 수정모드에서 제출버튼과 취소버튼 표시
// [v] 7. 투두리스트 개별아이템 우측에 삭제버튼

const TodoUl = styled.ul`
`;

const TodoList = ({ refresh }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getTodos('/todos');
      setTodos(res.data);
    }
    fetchData();
  }, [refresh])
  return (
    <TodoUl>
      {
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoItem key={todo.id} todo={todo} 
            />
            </div>
          )
        })
      }
    </TodoUl>
  )
};

export default TodoList;
