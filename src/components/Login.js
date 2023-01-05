import React, { useEffect, useState } from 'react';
import Button from './common/Button';
import styled from 'styled-components';
import useInput from './hooks/useInput';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { LoginApi } from './api/LoginApi';
import Input from './common/Input';

const LoginBox = styled.div`
  margin-top: 16px;
  max-width: 400px;
  width: 50%;
  background: #f0ede6;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.h1`
  font-size: 1.5rem;
  color: #171e71;
  border-bottom: 2px solid #cb5917;
  width: 100%;
`;
const InputBox = styled.form`
  width: 100%;
  margin: 16px 0;
  > button {
    margin-top: 8px;
  }
`;

const AlertMessage = styled.span`
  font-size: 0.8rem;
  color: tomato;
`;
const LinkBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
`;

const Login = () => {
  const accessToken = localStorage.getItem('todo_accessToken');
  const navigate = useNavigate();
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
      navigate('/');
    };
  }, [accessToken]);
  const onSubmit = (e) => {
    e.preventDefault();
    LoginApi(email, password)
    .then(navigate('/'));
  };
    // 유효성검사 
  // [v] 1. 메일 @ 포함
  // [v] 2. 비밀번호 8자 이상
  // [v] 3. 메일과 비밀번호가 조건을 만족했을때만 버튼 활성화
  return (
    <LoginBox>
      <Header>로그인</Header>
      <InputBox onSubmit={onSubmit}>
        <Input id="email" value={email} onChange={setEmail} 
        placeholder="이메일을 입력하세요" />
        { alertEmail && email.length ? 
        <AlertMessage>이메일 형식이 아닙니다.</AlertMessage> : null }
        <Input id="password" value={password} onChange={setPassword} 
        placeholder="비밀번호" type="password" />
        { alertPassword && password.length ? 
        <AlertMessage>비밀번호는 영문과 숫자를 포함한 8글자 이상입니다.</AlertMessage> : null }
        <Button styles="default" 
        disabled={
          (alertEmail === true || alertPassword === true)}
        type="submit"
        >로그인</Button>
        <LinkBox>
          <Button styles="link">
            <Link to="/signup">회원가입</Link>
          </Button>
          <Button styles="link">아이디 찾기</Button>
          <Button styles="link">비밀번호 찾기</Button>
        </LinkBox>
      </InputBox>
    </LoginBox>
  )
}

export default Login;
