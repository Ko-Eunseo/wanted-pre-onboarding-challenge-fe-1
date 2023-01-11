import Input from '../../../common/Input/Input';
import Button from '../../../common/button/Button';
import { useState } from 'react';
import { createTodo } from '../../../api/TodoApi';
import {AiFillCloseSquare} from 'react-icons/ai';
import * as TodoCreateStyle from './TodoCreateStyle';

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
    <TodoCreateStyle.CreateForm onSubmit={handleCreateTodo}>
      <TodoCreateStyle.CreateTitle>
        <h3>Todo 추가하기</h3>
        <AiFillCloseSquare onClick={handleAddMode}/>
      </TodoCreateStyle.CreateTitle>
      <Input name="title" id="todo Title" type="text" placeholder="오늘 할 일을 적어보세요." border="border" value={title} onChange={handleTodoContent} />
      <TodoCreateStyle.Textarea name="content" value={content} onChange={handleTodoContent} />
      <Button styles="default" type="submit">Add Todo</Button>
    </TodoCreateStyle.CreateForm>
    </>
  )
}

export default TodoCreate;
