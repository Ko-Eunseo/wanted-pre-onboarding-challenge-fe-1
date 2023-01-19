import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "access_token"
)}`;
const url = process.env.REACT_APP_SERVER_URL;

interface TodoApiParams {
  todoId?: number;
  parameter?: object;
}

export const getTodos = async () => {
  const res = await axios.get(url + "/todos");
  return res.data;
};

export const getSpecificTodo = async (todoId) => {
  const res = await axios.get(url + "/todos/" + todoId);
  return res.data;
};

export const createTodo = async (parameter) => {
  const res = await axios.post(url + "/todos", parameter);
  return res.data;
};

export const updateTodo = async (todoId, parameter) => {
  const res = await axios.put(url + "/todos/" + todoId, parameter);
  return res.data;
};

export const deleteTodo = async (todoId) => {
  await axios.delete(url + "/todos/" + todoId);
};
