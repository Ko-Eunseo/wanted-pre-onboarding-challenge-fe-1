import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Todo from './components/Todo';
// [v] 1. '/auth' 경로에 로그인 기능 
// [v] 2. 로그인시 /todo경로 이동
// [] 3. 토큰이 있는 상태에서 / 접속시 /todo 로 리다이렉트
// [] 4. 토큰이 없는 상태에서 /todo 접속시 / 로 리다이렉트
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Todo()} />
        <Route path='/auth' element={Login()} />
        <Route path='/signup' element={SignUp()} />
      </Routes>
    </div>
  );
}

export default App;
