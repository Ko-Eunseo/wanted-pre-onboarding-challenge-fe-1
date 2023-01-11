import axios from "axios";

const SignupApi = async (email:string, password:string) => {
  const url = process.env.REACT_APP_SERVER_URL;
  const path = '/users/create';
  const payload = {
    email,
    password
  }
  return await axios.post(url + path, payload)
  .then(res => {
    alert('회원가입이 완료되었습니다.');
    return res;
  })
  .catch(err => {
    if(err.response.status === 409) {
      alert('이미 가입되어있는 아이디 입니다.')
    }
    console.log(err);
  })
}

export default SignupApi;
