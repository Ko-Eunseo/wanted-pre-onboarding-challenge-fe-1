import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const TodoItemBox = styled.li`
  cursor: pointer;
  width: 100%;
  border: 1px solid #eeeeee;
  margin: 4px auto;
  display: flex;
  border-radius: 5px;
`;
const TodoTitle = styled.h2`
  margin: 8px;
  margin-right: 0;
`;
const TodoItem = ({ todo }) => {
  const navigate = useNavigate();
  const { "*" : curParams} = useParams();
  const handleOpenDetailPage = (e) => {
    curParams === todo.id ?
    navigate('/') :
    navigate(`${todo.id}`);
  };
  return (
    <>
      <TodoItemBox key={todo.id} onClick={handleOpenDetailPage} >
        <TodoTitle>{todo.title}</TodoTitle>
      </TodoItemBox>
    </>
  )
}

export default TodoItem;