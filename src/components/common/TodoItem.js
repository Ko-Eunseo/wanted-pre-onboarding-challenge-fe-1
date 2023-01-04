import styled from "styled-components";
import { BiCircle } from 'react-icons/bi';
import { useNavigate, useParams } from "react-router-dom";

const TodoItemBox = styled.li`
  cursor: pointer;
  width: 100%;
  border-bottom: 2px solid #cb5917;
  margin: 4px auto;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;
const TodoTitle = styled.h2`
  font-size: 1rem;
  margin: 4px;
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
        <BiCircle />
        <TodoTitle>{todo.title}</TodoTitle>
      </TodoItemBox>
    </>
  )
}

export default TodoItem;