import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import "react-toastify/dist/ReactToastify.css";

import { getUserData, addUserContactsOnClient } from "../external/axios/axiosDashboard";


export const DashboardContext = createContext({});

export default function DashboardProvider({ children }) {
    
    const notifySucess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);

    const [dataList, setDataList] = useState([])
    const [listState, setListState] = useState(false)
    const [contactClientState, setContactClientState] = useState(false)
    const [myPerfilState, setMyPerfilState] = useState(true)

    const navigate = useNavigate();

    function handleMyPerfilOnClickFunc(){
        setMyPerfilState(true)
        setListState(false)
    }

    function listContactsLeftOfOnClickFunc(){
        setContactClientState(true)
        setListState(true)
        setMyPerfilState(false)
        const clients_token = Cookies.get('clients_token')

        if(!clients_token){
            navigate("/notfound");
        }

        const token = clients_token
        const url = "http://127.0.0.1:3001/clients/contacts_left"

        getUserData(token, listContactsLeftOfOk, listContactsLeftOfError,url)
    }
    function listContactsLeftOfOk(response) {
        setDataList(response.data)
        return
      }
      function listContactsLeftOfError(response) {
        if (response.data.message === "Not found or empty") {
          notifyError("Não encontrado");
          return;
        }
        notifyError("Não foi possível listar!");
    }

    function addContactOnClickFunc(name){
        const url = `http://127.0.0.1:3001/clients/${name}`
        const token = Cookies.get('clients_token')
        addUserContactsOnClient(token, addContactOnClientOk, addContactOnClientError, url)
    }

    function addContactOnClientOk(){
        listContactsLeftOfOnClickFunc()
        notifySucess("Contato adicionado!")
    }
    function addContactOnClientError(err){
        notifyError(err);
    }

    function listUserContactsOnClickFunc(){
        setContactClientState(false)
        setListState(true)
        setMyPerfilState(false)

        const clients_token = Cookies.get('clients_token')

        if(!clients_token){
            navigate("/notfound");
        }

        const token = clients_token
        const url = "http://127.0.0.1:3001/clients/contacts"

        getUserData(token, listUserClientsOk, listUserClientsError,url)
    }
    function listUserClientsOk(response) {
        setDataList(response.data)
        console.log(response.data)
        return
    }
    function listUserClientsError(response) {
        if (response.data.message === "Not found or empty") {
          notifyError("Não encontrado");
          return;
        }
        notifyError("Não foi possível listar!");
    }

    return (
        <DashboardContext.Provider
        value={{
            notifySucess,
            notifyError,
            listState,
            contactClientState,
            myPerfilState,
            handleMyPerfilOnClickFunc,
            listUserContactsOnClickFunc,
            dataList,
            listContactsLeftOfOnClickFunc,
            addContactOnClickFunc,
        }}
        >
        {children}
        </DashboardContext.Provider>
    );
}