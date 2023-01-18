import { useState } from "react";
import { deleteTodo, getSpecificTodo } from "../../../api/TodoApi";
import { BiCircle } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import EditMode from "../editMode/EditMode";
import * as TodoDetailStyle from "./TodoDetailStyle";
import IconButton from "../../../common/iconButton/IconButton";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface TodoType {
  title?: string;
  content?: string;
  createdAt?: string;
}

const TodoDetail = ({ curParams, refresher }) => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  // delete w react query
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["todo"]);
      navigate("/");
    },
  });
  const handleDelete = (e) => {
    e.preventDefault();
    deleteMutation.mutate(curParams);
    navigate("/");
  };

  // readDetail w react query
  const fetchDetail = async ({ queryKey }) => {
    const [_, id] = queryKey;
    const res = await getSpecificTodo(id);
    return res.data;
  };

  const { data, isLoading, isError } = useQuery(
    ["detailTodo", curParams],
    fetchDetail
  );

  const handleUpdateMode = () => {
    setEdit(!edit);
  };

  if (isLoading) {
    return <div>is Loading...</div>;
  }
  if (isError) {
    return <div>is Error...</div>;
  }

  const { title, content, createdAt }: TodoType = data;

  return (
    <>
      <TodoDetailStyle.TodoDetailBox>
        {edit ? (
          <EditMode
            curParams={curParams}
            curTitle={title}
            curContent={content}
            handleUpdateMode={handleUpdateMode}
          />
        ) : (
          <>
            <TodoDetailStyle.TodoTitle>
              <BiCircle />
              <h3>{title}</h3>
              <TodoDetailStyle.EditBox>
                <IconButton onClick={handleDelete} type="button">
                  <BsTrashFill />
                </IconButton>
                <IconButton onClick={handleUpdateMode} type="button">
                  <FaEdit />
                </IconButton>
              </TodoDetailStyle.EditBox>
            </TodoDetailStyle.TodoTitle>
            <TodoDetailStyle.TodoContent>
              <span>Date: {createdAt}</span>
              <p>{content}</p>
            </TodoDetailStyle.TodoContent>
          </>
        )}
      </TodoDetailStyle.TodoDetailBox>
    </>
  );
};

export default TodoDetail;
