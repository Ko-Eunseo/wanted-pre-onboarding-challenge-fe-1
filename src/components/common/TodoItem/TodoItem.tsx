import * as TodoItemStyle from "./TodoItemStyle";
import { BiCircle, BiCheckCircle } from 'react-icons/bi';
import { useNavigate, useParams } from "react-router-dom";

const TodoItem = ({ todo, refresher }) => {
  const navigate = useNavigate();
  const { "*" : curParams} = useParams();
  const handleOpenDetailPage = (e) => {
    curParams === todo.id ?
    navigate('/') :
    navigate(`${todo.id}`);
  };
  return (
    <>
      <TodoItemStyle.TodoItemBox key={todo.id} onClick={handleOpenDetailPage} >
        <TodoItemStyle.TodoTitle>
          {curParams === todo.id ?
            <BiCheckCircle />
            : <BiCircle />
          }
          <h2>{todo.title}</h2>
        </TodoItemStyle.TodoTitle>
      </TodoItemStyle.TodoItemBox>
    </>
  )
}

export default TodoItem;