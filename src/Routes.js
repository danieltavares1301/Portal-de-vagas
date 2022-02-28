import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import HeaderHome from "./components/headerHome";
import Profile from "./pages/user/profile";
import Vacancies from "./pages/vacancies";
import DescriptionVacancy from "./pages/vacancies/description";

import Companies from "./pages/companies";
import CompanyVacancies from "./pages/companies/companyVacancies";
import SignUpUser from "./pages/signupUser";
import Header from "./components/header";
import SettingsUser from "./pages/user/profile/settingsUser";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderHome /> <Home />
            </>
          }
        />
        <Route
          path="/signUp"
          element={
            <>
              <SignUpUser />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />
        <Route
          path="/profile/settings"
          element={
            <>
              <Header />
              <SettingsUser />
            </>
          }
        />
        <Route
          path="/vacancies"
          element={
            <>
              <Header />
              <Vacancies />
            </>
          }
        />
        <Route
          path="/descriptionVacancy"
          element={
            <>
              <Header />
              <DescriptionVacancy />
            </>
          }
        />
        <Route
          path="/companies"
          element={
            <>
              <Header />
              <Companies />
            </>
          }
        />
        <Route
          path="/companyVacancies"
          element={
            <>
              <CompanyVacancies />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default routes;
