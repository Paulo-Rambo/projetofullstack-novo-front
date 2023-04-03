import { Navbar } from "../style"
import { Button } from "../../../styles/Button"
import { DashboardContext } from "../../../providers/dashboardContext";
import { UserContext } from "../../../providers/userContext";
import { useContext } from "react";

export default function NavbarComponent(){
    const { logoutButtonFunc, formSelect, deleteUserOnClickFunc } = useContext(UserContext);
    const { 
        handleMyPerfilOnClickFunc,
        listUserContactsOnClickFunc,
        listContactsLeftOfOnClickFunc,
    } = useContext(DashboardContext);

    return(
        <Navbar>
            <Button
            onClick={logoutButtonFunc}
            background={"var(--color-grey-3)"}
            hover={"var(--color-grey-2)"}
            type="submit"
            width="auto"
            >
            Sair
            </Button>
            <div className="adjust_Nav">
                <Button
                onClick={handleMyPerfilOnClickFunc}
                background={"var(--color-grey-3)"}
                hover={"var(--color-grey-2)"}
                type="submit"
                width="auto"
                >
                Meu Perfil
                </Button>
                {formSelect?
                <>
                <Button
                    onClick={listUserContactsOnClickFunc}
                    background={"var(--color-grey-3)"}
                    hover={"var(--color-grey-2)"}
                    type="submit"
                    width="auto"
                    >
                    Meus contatos
                    </Button>
                    <Button
                    onClick={listContactsLeftOfOnClickFunc}
                    background={"var(--color-grey-3)"}
                    hover={"var(--color-grey-2)"}
                    type="submit"
                    width="auto"
                    >
                    Adicionar contatos
                    </Button>
                </>:
                <></>
                }
                <Button
                onClick={deleteUserOnClickFunc}
                background={"var(--color-grey-3)"}
                hover={"var(--color-grey-2)"}
                type="submit"
                width="auto"
                >
                Deletar conta
                </Button>
            </div>
        </Navbar>
    )
}