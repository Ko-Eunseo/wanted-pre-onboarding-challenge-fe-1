import React, { useEffect, useState } from 'react';
import Input from './common/Input';
import Button from './common/Button';
import styled from 'styled-components';
import useInput from './hooks/useInput';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { LoginApi } from './api/LoginApi';

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.form`
  width: 50%;
`;
const AlertMessage = styled.span`
  font-size: 0.8rem;
  color: tomato;
`;
const LinkBox = styled.div`
  display: flex;
  justify-content: end;
`;

const Login = () => {
  const accessToken = localStorage.getItem('todo_accessToken');
  const navigate = useNavigate();
  const emailRegex = /[\w\-.]+@[\w\-.]+\.[\w\-.]/g
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/g
  const checkEmailValidation = (inputEmail) => {
    return emailRegex.test(inputEmail);
  }
  const checkPasswordValidation = (inputPassword) => {
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
      <h1>로그인</h1>
      <InputBox onSubmit={onSubmit}>
        <Input id="email" value={email} onChange={setEmail} 
        placeholder="전화번호, 사용자 이름 또는 이메일" />
        { alertEmail ? <AlertMessage>이메일 형식이 아닙니다.</AlertMessage> : null }
        <Input id="password" value={password} onChange={setPassword} 
        placeholder="비밀번호" type="password" />
        { alertPassword ? <AlertMessage>비밀번호는 대소문자와 특수문자를 포함한 8글자 이상이어야 합니다.</AlertMessage> : null }
        <Button styles="default" 
        disabled={!(email && password)}
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
