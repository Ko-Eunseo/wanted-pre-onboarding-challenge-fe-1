import { useEffect, useState } from "react";
import { deleteTodo, getSpecificTodo } from "../../../api/TodoApi";
import { BiCircle } from 'react-icons/bi';
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import EditMode from "../editMode/EditMode";
import * as TodoDetailStyle from './TodoDetailStyle';

interface TodoType {
  title?: string,
  content?: string,
  createdAt?: string,
}
const TodoDetail = ({curParams, refresh, refresher}) => {
  const [edit, setEdit] = useState(false);
  const [detailTodo, setDetailTodo] = useState({});
  const {title, content, createdAt}: TodoType = detailTodo;
  useEffect(() => {
    const fetchData = async () => {
      const res = await getSpecificTodo('/todos/', curParams);
      setDetailTodo(res.data);
    }
    fetchData();
  }, [curParams, refresh]);
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo('/todos/', curParams)
    window.location.href = "/";
    refresher();
  };
  const handleUpdateMode = () => {
    setEdit(!edit);
  };
  
  return (
    <>
      <TodoDetailStyle.TodoDetailBox>
        {
          edit ? 
          <EditMode curParams={curParams} 
          curTitle={title} curContent={content} 
          refresher={refresher} handleUpdateMode={handleUpdateMode}/>
          :
          <>
            <TodoDetailStyle.TodoTitle>
              <BiCircle />
              <h3>{title}</h3>
              <TodoDetailStyle.EditBox>
                <BsTrashFill onClick={handleDelete} />
                <FaEdit onClick={handleUpdateMode} />
              </TodoDetailStyle.EditBox>
            </TodoDetailStyle.TodoTitle>
            <TodoDetailStyle.TodoContent>
            <span>Date: {createdAt}</span>
              <p>{content}</p>
            </TodoDetailStyle.TodoContent>
          </>
        }
      </TodoDetailStyle.TodoDetailBox>
    </>
  )
}

export default TodoDetail;
