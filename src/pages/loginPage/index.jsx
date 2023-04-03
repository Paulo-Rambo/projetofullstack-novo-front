import { HeaderDiv, Section } from "./style";
import LoginForm from "./LoginForm";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { Button } from "../../styles/Button";

export default function LoginPage() {
  const { setFormSelect } = useContext(UserContext);
  return (
    <Section>
      <header>
        <HeaderDiv>
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
        </HeaderDiv>
      </header>
      <main>
        <LoginForm/>
      </main>
    </Section>
  );
}
