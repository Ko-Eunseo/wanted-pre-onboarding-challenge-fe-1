import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/pages/login/Login';
import SignUp from './components/pages/signup/SignUp';
import Todo from './components/pages/todo/todoHome/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Todo />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
