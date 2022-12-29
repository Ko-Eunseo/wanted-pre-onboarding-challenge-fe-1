import axios from "axios";

const SignupApi = async (email, password) => {
  const url = process.env.REACT_APP_SERVER_URL;
  const path = '/users/create';
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

export default SignupApi;
