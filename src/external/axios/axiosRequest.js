import axios from "axios";

export const postRegister = (
  formData,
  postRegisterUserOk,
  postRegisterError,
  endpoint
) => {
  console.log(endpoint)
  axios
    .post(endpoint, formData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
  })
    .then((response) => postRegisterUserOk(response))
    .catch((err) => postRegisterError(err));
};

export const postLogin = (
  formData,
  postLoginUserOk,
  postLoginError,
  endpoint
) => {
  axios
    .post(endpoint, formData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
  })
    .then((response) => postLoginUserOk(response))
    .catch((err) => postLoginError(err));
};