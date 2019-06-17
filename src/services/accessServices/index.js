import axios from "axios";
import { BaseUrl } from "../../config";

export const loginUserPA = (ident, codestu, password) => {
  return axios
    .post(`${BaseUrl}/login/user`, { ident, codestu, password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err.response.data.message;
    });
};
export const forgotDataPA = (ident, respuesta, tipo) => {
  return axios
    .post(`${BaseUrl}/forgotpassword`, { ident, respuesta, tipo })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err.response.data.message;
    });
};
