import * as TodoItemStyle from "./TodoItemStyle";
import { BiCircle, BiCheckCircle } from 'react-icons/bi';
import { useNavigate, useParams } from "react-router-dom";

const TodoItem = ({ todo, refresher, tabIndex }) => {
  const navigate = useNavigate();
  const { "*" : curParams} = useParams();
  const handleOpenDetailPage = () => {
    curParams === todo.id ?
    navigate('/') :
    navigate(`${todo.id}`);
  };
  const OpenDetailWithEnter = (e) => {
    if(e.key === 'Enter') {
      handleOpenDetailPage();
    }
  }
  return (
    <>
      <TodoItemStyle.TodoItemBox 
      key={todo.id} 
      onClick={handleOpenDetailPage} 
      onKeyPress={OpenDetailWithEnter} 
      tabIndex={tabIndex+1}>
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