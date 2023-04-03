import { useEffect } from "react";
import { Denied } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import CardList from "./CardList";
import NavbarComponent from "./Navbar";
import UserComponent from "./UserComponent";
import { DashboardContext } from "../../providers/dashboardContext";

export default function DashboardPage() {
  const { userState, loadAuthState, loading } = useContext(UserContext);
  const { listState, myPerfilState } = useContext(DashboardContext)

  useEffect(() => {
    loadAuthState();
  }, []);

  return (
    <>
    {userState?(
      <>
        <NavbarComponent/>
        {loading?(
          <p>Loading...</p>
        ):(
          <>
            {
            !myPerfilState?
            (<></>):
            (<UserComponent/>)
            }
            {
              !listState?
              (<></>):
              (<CardList />)
            }
          </>
        )}
      </>
      ):(
        <Denied>Não tem permissão para acessar!</Denied>
      )}
    </>
  )
}
