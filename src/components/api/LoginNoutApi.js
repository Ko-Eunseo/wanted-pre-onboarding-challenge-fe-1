import axios from "axios";

export const LoginApi = async (email, password) => {
  //로그인시 받은 토큰 로컬스토리지에 저장
  //루트경로로 리다이렉트
  //토큰이 유효하지 않은경우 사용자에게 알리고 로그인페이지로 리다이렉트
  const url = process.env.REACT_APP_SERVER_URL;
  const path = '/users/login';
  const payload = {
    email,
    password
  }
  return await axios.post(url + path, payload)
  .then(res => {
    console.log(res);
    return res;
  })
  .catch(err => {
    return err;
  })
}

export const LogoutApi = () => {
  //로컬스토리지에 저장된 토큰을 삭제
}