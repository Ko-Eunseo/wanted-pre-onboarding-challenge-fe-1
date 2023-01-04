import axios from "axios";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
const url = 'http://localhost:8080';

export const getTodos = async (path) => {
  const res = await axios.get(url + path);
  return res.data;
};

export const getSpecificTodo = async (path, todoId) => {
  const res = await axios.get(url + path + todoId);
  return res.data;
};

export const createTodo = async (path, parameter) => {
  const res = await axios.post(url + path, parameter);
  return res.data;
};

export const updateTodo = async (path, todoId, parameter) => {
  const res = await axios.put(url + path + todoId, parameter);
  return res.data;
}

export const deleteTodo = async (path, todoId) => {
  await axios.delete(url + path + todoId);
};
