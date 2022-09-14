import axios from "axios";
import { FORGOT_PASSWORD, LOGIN_URL } from "../../../API/API";

//login API fn
const login = async (userData) => {
  const response = await axios({
    method: "POST",
    baseURL: `${LOGIN_URL}`,
    data: userData,
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
//logout  API fn
const logout = () => {
  localStorage.removeItem("user");
};

//forget password

const ForgetPassword = async (data) => {
  const response = await axios({
    method: "POST",
    baseURL: `${FORGOT_PASSWORD}`,
    data: data,
  });

  return response.data;
};

//forget password

const resetPassword = async (data) => {
  const response = await axios({
    method: "POST",
    baseURL: `${FORGOT_PASSWORD}`,
    data: data,
  });

  return response.data;
};
const authService = {
  login,
  logout,
  ForgetPassword,
  resetPassword,
};

//export the authService function
export default authService;
