import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginApi } from '../../api/LoginApi';
import * as LoginStyle from './LoginStyle';
import Input from '../../common/Input/Input';
import Button from '../../common/button/Button';
import useInput from '../../hooks/useInput';

const Login = () => {
  const accessToken = localStorage.getItem('todo_accessToken');
  const checkEmailValidation = (inputEmail) => {
    const emailRegex = /[\w\-.]+@[\w\-.]+\.[\w\-.]/g
    return emailRegex.test(inputEmail);
  }
  const checkPasswordValidation = (inputPassword) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/g
    return passwordRegex.test(inputPassword);
  }
  const [email, setEmail, alertEmail] = useInput('', checkEmailValidation);
  const [password, setPassword, alertPassword] = useInput('', checkPasswordValidation);

  useEffect(() => {
    //다음번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트
    if(accessToken) {
      window.location.href = "/";
    };
  }, [accessToken]);
  const onSubmit = (e) => {
    e.preventDefault();
    LoginApi(email, password)
    window.location.href = "/";
  };
    // 유효성검사 
  // [v] 1. 메일 @ 포함
  // [v] 2. 비밀번호 8자 이상
  // [v] 3. 메일과 비밀번호가 조건을 만족했을때만 버튼 활성화
  return (
    <LoginStyle.LoginBox>
      <LoginStyle.Header>로그인</LoginStyle.Header>
      <LoginStyle.InputBox onSubmit={onSubmit}>
        <Input id="email" value={email} onChange={setEmail} type="email"
        placeholder="이메일을 입력하세요" />
        { alertEmail && email.length ? 
        <LoginStyle.AlertMessage>이메일 형식이 아닙니다.</LoginStyle.AlertMessage> : null }
        <Input id="password" value={password} onChange={setPassword}
        placeholder="비밀번호" type="password" />
        { alertPassword && password.length ? 
        <LoginStyle.AlertMessage>비밀번호는 영문과 숫자를 포함한 8글자 이상입니다.</LoginStyle.AlertMessage> : null }
        <Button styles="default" 
        disabled={
          (alertEmail === true || alertPassword === true)}
        type="submit"
        >로그인</Button>
        <LoginStyle.LinkBox>
          <Button styles="link" type="button">
            <Link to="/signup">회원가입</Link>
          </Button>
          <Button styles="link" type="button">아이디 찾기</Button>
          <Button styles="link" type="button">비밀번호 찾기</Button>
        </LoginStyle.LinkBox>
      </LoginStyle.InputBox>
    </LoginStyle.LoginBox>
  )
}

export default Login;
