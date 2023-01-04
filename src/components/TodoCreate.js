import Input from './common/Input';
import Button from './common/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { createTodo } from './api/TodoApi';
import {AiFillCloseSquare} from 'react-icons/ai';

const CreateTitle = styled.header`
  display: flex;
  justify-content: space-between;
  color: #171e71;
  border-bottom: 2px solid #cb5917;
  h3 {
    text-align: left;
    font-size: 1.2rem;
    margin-left: 8px;
  }
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

const TodoCreate = ({refresher, handleAddMode}) => {
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
      <CreateTitle>
        <h3>Todo 추가하기</h3>
        <AiFillCloseSquare onClick={handleAddMode}/>
      </CreateTitle>
      <Input name="title" placeholder="오늘 할 일을 적어보세요." border="border" value={title} onChange={handleTodoContent} />
      <Textarea name="content" value={content} onChange={handleTodoContent} />
      <Button styles="default" type="submit">Add Todo</Button>
    </CreateForm>
    </>
  )
}

export default TodoCreate;
