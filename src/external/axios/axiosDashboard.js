import axios from "axios";


export const getUserData = (token, getLoginUserOk, getLoginError, url) => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer: ${token}`,
        },
      })
      .then((response) => getLoginUserOk(response))
      .catch((err) => getLoginError(err));
};

export const addUserContactsOnClient = (token, addContactOnClientOk, addContactOnClientError, url) => {

    axios
    .post(url, {}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer: ${token}`,
      },
    })
    .then((response) => addContactOnClientOk(response))
    .catch((err) => {console.log(err.response.data)
      addContactOnClientError(err)});
};

export const updateUser = (token, addContactOnClientOk, addContactOnClientError, url, data) => {
    axios
    .patch(url, data, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer: ${token}`,
      },
    })
    .then((response) => addContactOnClientOk(response))
    .catch((err) => {
      console.log(err)
      addContactOnClientError(err)
    });
};

export const deleteUser = (token, deleteUserOk, deleteUserError, url, ) => {
  axios
  .delete(url, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer: ${token}`,
    },
  })
  .then((response) => deleteUserOk(response))
  .catch((err) => {
    console.log(err)
    deleteUserError(err)
  });
};