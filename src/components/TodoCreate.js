import Input from './common/Input';
import Button from './common/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { createTodo } from './api/TodoApi';

const CreateTitle = styled.h3`
  font-size: 1.2rem;
  text-align: left;
  color: #171e71;
  border-bottom: 2px solid #cb5917;
`;
const CreateForm = styled.form`
  background: #f0ede6;
  border-radius: 8px;
  padding: 16px;
  > input {
    margin-top: 16px;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 4px;
  margin: 4px 0;
  padding: 8px;
`;

const TodoCreate = ({refresher}) => {
  const [todoContent, setTodoContent] = useState({
    title: '',
    content: ''
  });
  const {title, content} = todoContent;
  const handleTodoContent = (e) => {
    const { value, name } = e.target;
    setTodoContent({
      ...todoContent,
      [name]: value
    });
  }  
  const reset = (e) => {
    setTodoContent({
      title: '',
      content: ''
    })
  };  
  function handleCreateTodo (e) {
    e.preventDefault();
    const payload = todoContent
    createTodo('/todos', payload)
    reset(e);
    refresher();
  }
  return (
    <>
    <CreateForm onSubmit={handleCreateTodo}>
      <CreateTitle>Todo 추가하기</CreateTitle>
      <Input name="title" placeholder="오늘 할 일을 적어보세요." border="border" value={title} onChange={handleTodoContent} />
      <Textarea name="content" value={content} onChange={handleTodoContent} />
      <Button styles="default" type="submit">Add Todo</Button>
    </CreateForm>
    </>
  )
}

export default TodoCreate;
