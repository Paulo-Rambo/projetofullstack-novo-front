import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";
import { Header } from "../style";
import { Button } from "../../../styles/Button";
import UpdateModal from "../UpddateUserModal";

export default function UserComponent(){
    const { userData, setUpdadeModal, updateModal } = useContext(UserContext);

    return(
        <Header>
            <section className="user_container">
                <section className="user_card">
                    <h2>{`Usuário: ${userData.name}`}</h2>
                    <p>{`Telefone: ${userData.telephone}`}</p>
                    <p>{`Email: ${userData.email}`}</p>
                    <p>{`Criado em: ${userData.createdAt.slice(0,10)}`}</p>
                </section>
                <Button
                onClick={()=> setUpdadeModal(true)}
                background={"var(--color-grey-3)"}
                hover={"var(--color-grey-2)"}
                type="submit"
                width="auto"
                >
                Atualizar Perfil
                </Button>
            </section>
            {updateModal ? <UpdateModal /> : ""}
        </Header>
    )
}