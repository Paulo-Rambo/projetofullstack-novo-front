import { CardsSection } from "./style";
import ContactsCard from "../ContactsCard";
import ContactsClientCard from "../ContactsClientCard";
import { useContext } from "react";
import { DashboardContext } from "../../../providers/dashboardContext";

export default function CardList() {
  const { dataList, contactClientState } = useContext(DashboardContext);

  return (
    <CardsSection>
      <div className="tecnology">
      {contactClientState?
        (<h2 className="mainTitle">Adicionar contatos:</h2>):
        (<h2 className="mainTitle">Seus contatos:</h2>)
        
        
      }
      </div>
      <div className="sectionDiv">
        {contactClientState? (
          dataList?(
            (dataList.map((iten) => (<ContactsCard iten={iten} key={iten.id} />)))):
            (<></>)
          ) : (
            dataList?(
              (dataList.map((iten) => (<ContactsClientCard iten={iten} key={iten.id} />)))):
              (<></>)
          )}
      </div>
    </CardsSection>
  );
}
