import "./App.css";
import ContactsManagerRoutes from "./routes";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyles />
      <ContactsManagerRoutes />
      <ToastContainer limit={2} autoClose={1300} />
    </>
  );
}

export default App;
