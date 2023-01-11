import axios from "axios";

export const LoginApi = async (email:string, password:string) => {
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
    const accessToken = res.data.token;
    //토큰 헤더에 default로 포함
    //axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    localStorage.setItem('todo_accessToken', accessToken);
    return res;
  })
  .catch(err => {
    if(err.response.status === 400) {
      alert('로그인정보를 다시 확인해주세요.')
    }
    return err;
  })
}
