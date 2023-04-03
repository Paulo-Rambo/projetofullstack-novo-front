import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import NotFoundPage from "../pages/notFoundPage";
import DashboardPage from "../pages/dashboardPage";


export default function ContactsManagerRoutes() {
  return (
    <>
      <Routes>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="notfound" element={<NotFoundPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </>
  );
}
