import { useState } from "react";
import { updateTodo } from "../../../api/TodoApi";
import Input from "../../../common/Input/Input";
import Button from "../../../common/button/Button";
import * as EditModeStyle from "./EditModeStyle";
import Textarea from "../../../common/textarea/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const EditMode = ({ curParams, curTitle, curContent, handleUpdateMode }) => {
  const [updateTodoData, setUpdateTodoData] = useState({
    title: "",
    content: "",
  });
  const { title, content } = updateTodoData;
  const handleUpdateTodo = (e) => {
    const { value, name } = e.target;
    setUpdateTodoData({
      ...updateTodoData,
      [name]: value,
    });
  };

  const queryClient = useQueryClient();
  const modifyMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: (modifiedData) => {
      queryClient.setQueryData(["detailTodo", { id: curParams }], modifiedData);
      queryClient.invalidateQueries(["detailTodo"]);
    },
  });

  const submitUpdateTodo = (e) => {
    e.preventDefault();
    if (!window.confirm("정말 해당 todo를 수정하시겠습니까?")) {
      handleUpdateMode();
    } else {
      const todoId = curParams;
      const parameter = {
        title: title ? title : curTitle,
        content: content ? content : curContent,
      };
      modifyMutation.mutate({ todoId, parameter });
      handleUpdateMode();
    }
  };
  return (
    <>
      <EditModeStyle.Form onSubmit={submitUpdateTodo}>
        <EditModeStyle.EditTitle>
          <h3>Todo 수정하기</h3>
        </EditModeStyle.EditTitle>
        <div>
          <EditModeStyle.TodoTitle>
            <Input
              name="title"
              id="edit Title"
              value={title ? title : curTitle}
              onChange={handleUpdateTodo}
              type="text"
            />
          </EditModeStyle.TodoTitle>
          <Textarea
            name="content"
            value={content ? content : curContent}
            onChange={handleUpdateTodo}
          />
        </div>
        <EditModeStyle.ButtonBox>
          <Button styles="cancel" onClick={handleUpdateMode} type="button">
            취소하기
          </Button>
          <Button styles="default" type="submit">
            수정하기
          </Button>
        </EditModeStyle.ButtonBox>
      </EditModeStyle.Form>
    </>
  );
};

export default EditMode;
