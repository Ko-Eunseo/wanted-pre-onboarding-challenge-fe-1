import Input from './common/Input';
import Button from './common/Button';
import useInput from './hooks/useInput';
import styled from 'styled-components';
import { useState } from 'react';
import { createTodo } from './api/TodoApi';

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eeeeee;
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
    <form onSubmit={handleCreateTodo}>
      <Input name="title" placeholder="오늘 할 일을 적어보세요." border="border" value={title} onChange={handleTodoContent} />
      <Textarea name="content" value={content} onChange={handleTodoContent} />
      <Button styles="default" type="submit" >Add Todo</Button>
    </form>
  )
}

export default TodoCreate;
