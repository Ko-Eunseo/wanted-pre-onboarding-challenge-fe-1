import { useEffect, useState } from "react";
import { getTodos } from "../../../api/TodoApi";
import TodoItem from "../../../common/TodoItem/TodoItem";
import * as TodoListStyle from './TodoListStyle';

const TodoList = ({ refresh, refresher }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getTodos('/todos');
      setTodos(res.data);
    }
    fetchData();
  }, [refresh])
  return (
    <TodoListStyle.TodoUl>
      {
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoItem key={todo.id} todo={todo} refresher={refresher}
            />
            </div>
          )
        })
      }
    </TodoListStyle.TodoUl>
  )
};

export default TodoList;
