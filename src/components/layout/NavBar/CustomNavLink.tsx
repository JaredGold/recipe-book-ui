import { Route } from "../../routes/routes";

type NavLinkProps = {
  route: Route;
};

const CustomNavLink = ({ route }: NavLinkProps) => {
  return (
    <a
      href={route.route}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {route.navName}
    </a>
  );
};

export default CustomNavLink;
