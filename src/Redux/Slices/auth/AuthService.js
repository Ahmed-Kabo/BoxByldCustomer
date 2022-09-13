import axios from "axios";
import { LOGIN_URL } from "../../../API/API";

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

//authServce main function

const authService = {
  login,
  logout,
};

//export the authService function
export default authService;
