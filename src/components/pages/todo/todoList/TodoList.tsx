import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../../api/TodoApi";
import TodoItem from "../../../common/TodoItem/TodoItem";
import * as TodoListStyle from "./TodoListStyle";

const TodoList = () => {
  const fetchTodo = async () => {
    const res = await getTodos();
    return res.data;
  };

  const { data, isLoading, isError } = useQuery(["todo"], fetchTodo);

  if (isLoading) {
    return <div>isLoding...</div>;
  }
  if (isError) {
    return <div>error</div>;
  }
  return (
    <TodoListStyle.TodoUl>
      {!data.length ? (
        <span>등록된 todo가 아직 없어요.</span>
      ) : (
        data.map((todo, i) => {
          return (
            <div key={todo.id}>
              <TodoItem key={todo.id} todo={todo} tabIndex={i} />
            </div>
          );
        })
      )}
    </TodoListStyle.TodoUl>
  );
};

export default TodoList;
