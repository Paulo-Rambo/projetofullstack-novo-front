import { DashboardContext } from "../../../providers/dashboardContext";
import { ItenCard } from "./style";
import { useContext } from "react";

export default function ContactsCard({ iten }) {
const { addContactOnClickFunc } = useContext(DashboardContext)

  return (
    <ItenCard>
        <>
          <div>
            <p>
              {iten.name}
            </p>
          </div>
          <div className="addContactDiv">
            <div
              onClick={() => addContactOnClickFunc(iten.name)}
            >
              <p>Add +</p>
            </div>
          </div>
        </>
    </ItenCard>
  );
}
