import axios from "axios";
import styled from "styled-components";
import useInput from "./hooks/useInput";
import Input from "./common/Input";
import Button from "./common/Button";
import { useNavigate } from "react-router-dom";
import {AiFillCloseSquare} from 'react-icons/ai';

const Wrap = styled.div`
  max-width: 400px;
  width: 50%;
  margin: 16px auto 0;
  background: #f0ede6;
  padding: 16px;
  border-radius: 5px;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #171e71;
  border-bottom: 2px solid #cb5917;
  h1 {
    margin-left: 8px;
    font-size: 1.5rem;
  }
`;
const SignUpBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  span {
    color: red;
    font-size: 0.8rem;
  }
  > button {
    margin-top: 8px;
  }
`;

const Signup = () => {
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
  const checkPasswordConfirmValidation = (inputPasswordConfirm) => {
    if(password && inputPasswordConfirm) {
      return password === inputPasswordConfirm;
    } else {
      return false;
    }
  }
  const [passwordConfirm, setPasswordConfirm, alertPasswordConfirm] = useInput('', checkPasswordConfirmValidation);

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/users/create';
    const payload = {
      email,
      password
    }
    axios.post(url, payload)
    .then(res => {
      console.log(res.data);
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    }
    )
    .catch(err => {
      if(err.response.status === 409) {
        alert('이미 가입되어있는 아이디 입니다.')
      }
      console.log(err);
    })
  };
  const handleCloseSignup = () => {
    navigate('/auth');
  }
  
  // 유효성검사 
  // [v] 1. 메일 @ 포함
  // [v] 2. 비밀번호 8자 이상
  // [v] 3. 메일과 비밀번호가 조건을 만족했을때만 버튼 활성화
  return (
    <Wrap>
      <Header>
        <h1>가입하기</h1>
        <AiFillCloseSquare onClick={handleCloseSignup} />
      </Header>
      <SignUpBox onSubmit={onSubmit}>
      <Input 
        id="email" 
        placeholder="메일" 
        value={email} 
        onChange={setEmail} 
        type="email" />
        { alertEmail && email.length ? <span>이메일 형식이 아닙니다.</span> : null }
        <Input 
        id="password" 
        placeholder="비밀번호" 
        value={password} 
        onChange={setPassword} 
        type="password" />
        { alertPassword && password.length ? <span>비밀번호는 숫자, 영문자를 포함한 8글자 이상이어야 합니다.</span> : null }
        <Input 
        id="passwordConfirm" 
        placeholder="비밀번호 확인" 
        value={passwordConfirm} 
        onChange={setPasswordConfirm} 
        type="password" />
        { alertPasswordConfirm && passwordConfirm.length ? <span>비밀번호가 일치하지 않습니다.</span> : null }
        <Button styles="default" type="submit"
        disabled={(alertEmail || alertPassword || alertPasswordConfirm)}
        >
          가입하기</Button>
      </SignUpBox>
    </Wrap>
  )
}

export default Signup;
