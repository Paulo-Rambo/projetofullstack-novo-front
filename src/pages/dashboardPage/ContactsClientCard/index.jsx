import { ItenCard } from "./style";

export default function ContactsClientCard({ iten }) {
  return (
    <ItenCard>
        <>
          <div className="levelDiv">
            <div>
              <p>{iten.name}</p>
            </div>
            <div>
            <p>{iten.email}</p>
            </div>
            <div>
            <p>{iten.telephone}</p>
            </div>
          </div>
        </>
    </ItenCard>
  );
}
