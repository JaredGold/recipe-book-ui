import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import APP_ROUTES from "./routes";

const AppRoutes: FunctionComponent = () => {
  const { HOME } = APP_ROUTES;
  return (
    <Routes>
      <Route path={HOME.route} element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
