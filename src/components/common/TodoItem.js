import styled from "styled-components";
import { BiCircle, BiCheckCircle } from 'react-icons/bi';
import { useNavigate, useParams } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { deleteTodo } from "../api/TodoApi";

const TodoItemBox = styled.li`
  cursor: pointer;
  width: 100%;
  border-bottom: 2px solid #cb5917;
  margin: 4px auto;
  display: flex;
  align-items: center;
  padding-left: 8px;
  justify-content: space-between;
`;
const TodoTitle = styled.header`
  display: flex;
  margin: 4px;
  align-items: center;
  h2 {
    font-size: 1rem;
    margin-left: 4px;
  }
`;

const TodoItem = ({ todo, refresher }) => {
  const navigate = useNavigate();
  const { "*" : curParams} = useParams();
  const handleOpenDetailPage = (e) => {
    curParams === todo.id ?
    navigate('/') :
    navigate(`${todo.id}`);
  };
  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   deleteTodo('/todos/', todo.id)
  //   refresher();
  // };
  return (
    <>
      <TodoItemBox key={todo.id} onClick={handleOpenDetailPage} >
        <TodoTitle>
          {curParams === todo.id ?
            <BiCheckCircle />
            : <BiCircle />
          }
          <h2>{todo.title}</h2>
        </TodoTitle>
        {/* <BsTrashFill onClick={handleDelete} /> */}
      </TodoItemBox>
    </>
  )
}

export default TodoItem;