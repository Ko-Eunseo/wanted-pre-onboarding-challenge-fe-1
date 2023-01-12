import SignupApi from "../../api/SignupApi";
import useInput from "../../hooks/useInput";
import Input from "../../common/Input/Input";
import Button from "../../common/button/Button";
import {AiFillCloseSquare} from 'react-icons/ai';
import * as SignUpStyle from './SignUpStyle';
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
  const checkPasswordConfirmValidation = (inputPasswordConfirm) => {
    if(password && inputPasswordConfirm) {
      return password === inputPasswordConfirm;
    } else {
      return false;
    }
  }
  const [passwordConfirm, setPasswordConfirm, alertPasswordConfirm] = useInput('', checkPasswordConfirmValidation);

  const onSubmit = (e) => {
    e.preventDefault();
    SignupApi(email,password)
    navigate('/auth');
  };
  const handleCloseSignup = () => {
    navigate('/auth');
  }
  
  return (
    <SignUpStyle.Wrap>
      <SignUpStyle.Header>
        <h1>가입하기</h1>
        <AiFillCloseSquare onClick={handleCloseSignup} />
      </SignUpStyle.Header>
      <SignUpStyle.SignUpBox onSubmit={onSubmit}>
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
      </SignUpStyle.SignUpBox>
    </SignUpStyle.Wrap>
  )
}

export default Signup;
