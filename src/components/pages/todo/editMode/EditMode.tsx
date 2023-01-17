import { useState } from "react";
import { updateTodo } from "../../../api/TodoApi";
import Input from "../../../common/Input/Input";
import Button from "../../../common/button/Button";
import * as EditModeStyle from "./EditModeStyle";
import Textarea from "../../../common/textaea/Textarea";

const EditMode = ({
  curParams,
  refresher,
  curTitle,
  curContent,
  handleUpdateMode,
}) => {
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
  const submitUpdateTodo = (e) => {
    e.preventDefault();
    const payload = {
      title: title ? title : curTitle,
      content: content ? content : curContent,
    };
    updateTodo(curParams, payload);
    refresher();
    handleUpdateMode();
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
