import APP_ROUTES from "../../routes/routes";
import CustomNavLink from "./CustomNavLink";

const NavBar: React.FC = () => {
  const { HOME, NEW_BLOG } = APP_ROUTES;

  return (
    <nav className="bg-gray-800 fixed w-screen">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <CustomNavLink route={HOME}></CustomNavLink>
              <CustomNavLink route={NEW_BLOG}></CustomNavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
