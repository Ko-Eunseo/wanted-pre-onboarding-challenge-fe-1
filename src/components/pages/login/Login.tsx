import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/LoginApi";
import * as LoginStyle from "./LoginStyle";
import Input from "../../common/Input/Input";
import Button from "../../common/button/Button";
import useInput from "../../hooks/useInput";

const Login: React.FC = () => {
  const emailRegex = /[\w\-.]+@[\w\-.]+\.[\w\-.]/g;
  const accessToken = localStorage.getItem("todo_accessToken");
  const checkEmailValidation = (inputEmail: string) => {
    return emailRegex.test(inputEmail);
  };
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/g;
  const checkPasswordValidation = (inputPassword: string) => {
    return passwordRegex.test(inputPassword);
  };
  const [email, setEmail, alertEmail] = useInput("", checkEmailValidation);
  const [password, setPassword, alertPassword] = useInput(
    "",
    checkPasswordValidation
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
  const onSubmit = (e) => {
    e.preventDefault();
    LoginApi(email, password);
    navigate("/");
  };

  return (
    <LoginStyle.LoginBox>
      <LoginStyle.Header>로그인</LoginStyle.Header>
      <LoginStyle.InputBox onSubmit={onSubmit}>
        <Input
          id="email"
          value={email}
          onChange={setEmail}
          type="email"
          tabIndex={1}
          placeholder="이메일을 입력하세요"
        />
        {alertEmail && email.length ? (
          <LoginStyle.AlertMessage>
            이메일 형식이 아닙니다.
          </LoginStyle.AlertMessage>
        ) : null}
        <Input
          id="password"
          value={password}
          onChange={setPassword}
          tabIndex={2}
          placeholder="비밀번호"
          type="password"
        />
        {alertPassword && password.length ? (
          <LoginStyle.AlertMessage>
            비밀번호는 영문과 숫자를 포함한 8글자 이상입니다.
          </LoginStyle.AlertMessage>
        ) : null}
        <Button
          styles="default"
          disabled={alertEmail === true || alertPassword === true}
          type="submit"
          tabIndex={3}
        >
          로그인
        </Button>
        <LoginStyle.LinkBox>
          <Button styles="link" type="button" tabIndex={4}>
            <Link to="/signup">회원가입</Link>
          </Button>
          <Button styles="link" type="button" tabIndex={5}>
            아이디 찾기
          </Button>
          <Button styles="link" type="button" tabIndex={6}>
            비밀번호 찾기
          </Button>
        </LoginStyle.LinkBox>
      </LoginStyle.InputBox>
    </LoginStyle.LoginBox>
  );
};

export default Login;
