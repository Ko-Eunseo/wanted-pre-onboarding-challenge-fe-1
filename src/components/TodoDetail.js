import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, getSpecificTodo } from "./api/TodoApi";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import styled from "styled-components";
import EditMode from "./EditMode";

const TodoDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  margin: 16px 0;
`;
const TodoTitle = styled.div`
  display: flex;
  border-bottom: 1px solid #eeeeee;
  padding: 8px 16px;
  justify-content: space-between;
`;
const EditBox = styled.div`
  svg {
    margin: 4px 4px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const TodoContent = styled.div`
  display: flex;
  margin: 8px 16px 16px;
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
              <h2>{title}</h2>
              <EditBox>
                <FaTrash onClick={handleDelete} />
                <FaEdit onClick={handleUpdateMode} />
              </EditBox>
            </TodoTitle>
            <span>{createdAt}</span>
            <TodoContent>
              <FaCheck />
              <p>{content}</p>
            </TodoContent>
          </>
        }
      </TodoDetailBox>
    </>
  )
}

export default TodoDetail;
