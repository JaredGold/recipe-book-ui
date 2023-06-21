export type Route = {
  route: string;
  navName: string;
};

const APP_ROUTES = {
  HOME: { route: "/", navName: "Home" },
  NEW_BLOG: { route: "/new", navName: "New Blog" },
};

export default APP_ROUTES;
