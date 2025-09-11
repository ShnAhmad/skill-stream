import { useLocation, Link } from "react-router-dom"; // if using react-router-dom

export default function AccountTabs() {
  const location = useLocation(); // get current path
  const pathname = location.pathname;

  return (
    <div className="flex w-full text-sm md:text-lg lg:text-xl font-semibold text-center tracking-[-0.05px] ">
      <Link
        to="/login"
        className={`w-1/2 py-2 ${
          pathname === "/login"
            ? "text-primary-700 border-b border-primary-600"
            : ""
        }`}
      >
        SIGN IN
      </Link>
      <Link
        to="/signup"
        className={`w-1/2 py-2 ${
          pathname === "/signup"
            ? "text-primary-700 border-b border-primary-600"
            : ""
        }`}
      >
        CREATE ACCOUNT
      </Link>
    </div>
  );
}
