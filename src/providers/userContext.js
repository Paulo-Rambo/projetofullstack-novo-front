import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { postRegister } from "../external/axios/axiosRequest";
import Cookies from 'js-cookie';
import { getUserData, updateUser, deleteUser } from "../external/axios/axiosDashboard";

import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  
  const [userData, setUserData] = useState({})
  const [userState, setUserState] = useState(false)
  const [formSelect, setFormSelect] = useState(false)
  const [loading, setLoading] = useState(true);
  const [updateModal, setUpdadeModal] = useState(false)
  const navigate = useNavigate();
  const notifySucess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  /* Register */

  function registerFormAction(register) {
    delete register.password2;
    let endpoint = ""
    formSelect?
    endpoint = "http://127.0.0.1:3001/clients":
    endpoint = "http://127.0.0.1:3001/contacts"

    postRegister(register, postRegisterUserOk, postRegisterError, endpoint);
  }

  function postRegisterUserOk(response) {
    if (response.data.message === "Criado com sucesso") {
      notifySucess("Cadastrado com sucesso!");
      navigate("/login");
    }
  }
  function postRegisterError(response) {
    if (response.data.message === "Este e-mail já está cadastrado!") {
      notifyError("Este e-mail já está cadastrado!");
      return;
    }
    notifyError("Não foi possível cadastrar!");
  }

//Auth
  function loadAuthState() {
    let token = ""
    const clients_token = Cookies.get('clients_token');
    if(clients_token){
      setFormSelect(true)
      token = Cookies.get('clients_token')
    }
    const contacts_token = Cookies.get('contacts_token');
    if(contacts_token){
      setFormSelect(false)
      token = Cookies.get('contacts_token')
    }
    if(clients_token || contacts_token) {
      setUserState(true);
      let url = ""
      clients_token?
      url = "http://127.0.0.1:3001/clients":
      url = "http://127.0.0.1:3001/contacts"
      getUserData(token, getLoginUserOk, getLoginError, url);
    }else{
      navigate("/login");
    }
  }

  function getLoginUserOk(response) {
      if(!response.data.id){
          navigate("/notfound")
      }
      setUserData(response.data)
      setLoading(false)
  }
  function getLoginError(response) {
      navigate("/login")
  }

  // Login


  function loginFormAction(register) {
    let endpoint = ""
    Cookies.remove('clients_token')
    Cookies.remove('contacts_token')
    formSelect?
    endpoint = "http://127.0.0.1:3001/clients/login":
    endpoint = "http://127.0.0.1:3001/contacts/login"
 
    postRegister(register, postLoginUserOk, postLoginError, endpoint);
  }

  function postLoginUserOk(response) {
    if (response.data.token) {
      notifySucess("Logado com sucesso!")
      formSelect?
      Cookies.set('clients_token', response.data.token):
      Cookies.set('contacts_token', response.data.token);

      setUserState(true)
      navigate("dashboard");
    }
  }
  function postLoginError(response) {
    if (response.message === "Wrong email or password") {
      notifyError("Senha ou email incorretos");
      return;
    }
    notifyError("Não foi possível logar!");
  }


  function updateProfileOnClickFunc(data){
        
    for (let key in data) {
        if (data[key].length === 0) {
          delete data[key]; 
        }
    }
    let url = ""
    let token = ""
    const clients_token = Cookies.get('clients_token')
    const contacts_token = Cookies.get('contacts_token')
    if(clients_token){
        url = "http://127.0.0.1:3001/clients"
        token = clients_token
    }else if(contacts_token){
        url = "http://127.0.0.1:3001/contacts"
        token = contacts_token
    }else{
        notifyError("Não tem permissao para isto");
    }

    updateUser(token, updateProfileOk, updateProfileError, url, data);
}
function updateProfileOk(response){
    setUserData(response.data.data)
    notifySucess("Atualizado!")
    setUpdadeModal(false)
    return
}
function updateProfileError(response){
    notifyError("Não foi possível atualizar");
    return
}

  //Logout

  function logoutButtonFunc(){
    Cookies.remove('clients_token')
    Cookies.remove('contacts_token')
    setUserState(false)
    navigate("/login")
  }

  function deleteUserOnClickFunc(){
    let url = ""
    let token = ""
    const clients_token = Cookies.get('clients_token')
    const contacts_token = Cookies.get('contacts_token')
    if(clients_token){
        url = "http://127.0.0.1:3001/clients"
        token = clients_token
    }else if(contacts_token){
        url = "http://127.0.0.1:3001/contacts"
        token = contacts_token
    }else{
        notifyError("Não tem permissao para isto");
    }

    deleteUser(token, deleteUserOk, deleteUserError, url);
    }
    function deleteUserOk(response){
        notifySucess("Deletado!")
        Cookies.remove('clients_token')
        Cookies.remove('contacts_token')
        setUserState(false)
        navigate("/login")
        return
    }
    function deleteUserError(response){
        notifyError("Não foi possível deletar");
        return
    }


  return (
    <UserContext.Provider
      value={{
        formSelect,
        setFormSelect,
        loading,
        setLoading,
        notifySucess,
        notifyError,
        registerFormAction,
        loginFormAction,
        loadAuthState,
        userState,
        userData,
        logoutButtonFunc,
        updateProfileOnClickFunc,
        updateModal,
        setUpdadeModal,
        deleteUserOnClickFunc
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
