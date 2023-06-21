import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import NewBlogPage from "../pages/NewBlogPage/NewBlogPage";
import APP_ROUTES from "./routes";

const AppRoutes: FunctionComponent = () => {
  const { HOME, NEW_BLOG } = APP_ROUTES;
  return (
    <Routes>
      <Route path={HOME.route} element={<HomePage />} />
      <Route path={NEW_BLOG.route} element={<NewBlogPage />} />
    </Routes>
  );
};

export default AppRoutes;
