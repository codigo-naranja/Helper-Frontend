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
export const saveQuestion = (
  ident,
  pregunta,
  empresa,
  respuesta,
  tipo,
  token
) => {
  return axios
    .post(
      `${BaseUrl}/firstaccess`,
      { pregunta, empresa, ident, respuesta, tipo },
      { Authorization: token }
    )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err.response.data.message;
    });
};

export const getVersion = () => {
  return axios
    .get(`${BaseUrl}/version`)
    .then(response => {
      return response.data[0];
    })
    .catch(err => {
      throw err.response.data.message;
    });
};
