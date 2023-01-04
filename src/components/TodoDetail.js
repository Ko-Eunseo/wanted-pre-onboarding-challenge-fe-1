import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, getSpecificTodo } from "./api/TodoApi";
import { BiCircle } from 'react-icons/bi';
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import styled from "styled-components";
import EditMode from "./EditMode";

const TodoDetailBox = styled.section`
  background: #f0ede6;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 16px;
`;
const TodoTitle = styled.header`
  display: flex;
  border-bottom: 1px solid #eeeeee;
  padding: 8px 16px;
  justify-content: space-between;
  border: 2px solid #cb5917;
  border-left: 0;
  border-right: 0;
  align-items: center;
  color: #171e71;
  h3 {
    font-size: 1.2rem;
  }
`;
const EditBox = styled.div`
  svg {
    margin-top: 4px;
    &:first-of-type {
      margin-right: 4px;
    }
  }
`;
const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 8px 0; */
  border-bottom: 2px solid #cb5917;
  opacity: 0.8;
  background-position: center;
  background-image:  linear-gradient(#cb5917 1px, transparent 1px), linear-gradient(to right, #cb5917 1px, transparent 1px);
  background-size: 1.5rem 1.5rem;
  p {
    margin: 8px;
    text-align: left;
  }
  svg {
    margin: 0 8px;
  }
`;
const TodoDetail = ({curParams, refresh, refresher}) => {
  const [edit, setEdit] = useState(false);
  const [detailTodo, setDetailTodo] = useState({});
  const {title, content, createdAt} = detailTodo;
  const navigate = useNavigate();
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
    .then(navigate('/'));
    refresher();
  };
  const handleUpdateMode = () => {
    setEdit(!edit);
  };
  
  return (
    <>
      <TodoDetailBox>
        {
          edit ? 
          <EditMode curParams={curParams} 
          curTitle={title} curContent={content} 
          refresher={refresher} handleUpdateMode={handleUpdateMode}/>
          :
          <>
            <TodoTitle>
              <BiCircle />
              <h3>{title}</h3>
              <EditBox>
                <BsTrashFill onClick={handleDelete} />
                <FaEdit onClick={handleUpdateMode} />
              </EditBox>
            </TodoTitle>
            <TodoContent>
            <span>Date: {createdAt}</span>
              <p>{content}</p>
            </TodoContent>
          </>
        }
      </TodoDetailBox>
    </>
  )
}

export default TodoDetail;
