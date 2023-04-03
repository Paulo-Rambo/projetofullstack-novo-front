import CreateForm from "./CreateForm";
import { Navbar, Section } from "./style";
import { Button } from "../../styles/Button";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext"

export default function RegisterPage({ notifySucess, notifyError }) {
  const { setFormSelect } = useContext(UserContext);

  return (
    <Section>
      <header>
        <Navbar>
          <h1>Escolha o cadastro</h1>
          <div className="navButtons">
          <Button
              onClick={()=> setFormSelect(true)}
              background={"var(--color-grey-3)"}
              hover={"var(--color-grey-2)"}
              width="auto"
            >
              Cliente
            </Button>
            <Button
              onClick={()=> setFormSelect(false)}
              background={"var(--color-grey-3)"}
              hover={"var(--color-grey-2)"}
              width="auto"
            >
              Contato
            </Button>
          </div>
        </Navbar>
      </header>
      <main>
          <CreateForm notifySucess={notifySucess} notifyError={notifyError}/> 
      </main>
    </Section>
  );
}
