import { useState } from "react";
import { updateTodo } from "./api/TodoApi";
import styled from "styled-components";
import Input from "./common/Input";
import Button from "./common/Button";

const Form = styled.form`
  > div > div {
    padding: 0;
  }
`;
const EditTitle = styled.header`
  color: #171e71;
  border-bottom: 2px solid #cb5917;
  margin-bottom: 8px;
  h3 {
    font-size: 1.2rem;
  }
`;
const TodoTitle = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
`;
const Textarea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  margin: 8px 0 0;
  padding: 8px 8px 16px;
`;
const ButtonBox = styled.div`
  display: flex;
  margin-top: 8px;
  button:first-of-type {
    margin-right: 8px;
  }
`;
const EditMode = ({curParams, refresher, curTitle, curContent, handleUpdateMode}) => {
  const [updateTodoData, setUpdateTodoData] = useState({
    title: '',
    content: ''
  });
  const {title, content} = updateTodoData;
  const handleUpdateTodo = (e) => {
    const { value, name } = e.target;
    setUpdateTodoData({
      ...updateTodoData,
      [name]: value
    });
  }
  const submitUpdateTodo = (e) => {
    e.preventDefault();
    const payload = {
      title: title ? title : curTitle,
      content: content ? content : curContent
    }
    updateTodo('/todos/', curParams, payload);
    refresher();
    handleUpdateMode();
  }
  return (
    <>
      <Form onSubmit={submitUpdateTodo}>
        <EditTitle>
          <h3>Todo 수정하기</h3>
        </EditTitle>
        <div>
          <TodoTitle>
            <Input name="title" 
            value={title ? title : curTitle} 
            onChange={handleUpdateTodo}
            />
          </TodoTitle>
          <Textarea name="content" 
          value={content ? content : curContent} 
          onChange={handleUpdateTodo}/>
        </div>
        <ButtonBox>
          <Button styles="cancel" onClick={handleUpdateMode}>취소하기</Button>
          <Button styles="default" type="submit">수정하기</Button>
        </ButtonBox>
      </Form>
    </>
  )
}

export default EditMode;
