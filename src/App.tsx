import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import SignUp from "./components/pages/signup/SignUp";
import Todo from "./components/pages/todo/todoHome/Todo";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/*" element={<Todo />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
