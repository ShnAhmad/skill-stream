import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogOutBtn from "./LogOutBtn";
import Logo from "../Logo";
import authService from "../../appwrite/auth";
import { logout as authLogout } from "../../store/authSlice";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(authLogout());
    });
  };
  const navItems = [
    {
      name: "Home",
      slug: "/",
      display: true,
    },
    {
      name: "Login",
      slug: "/login",
      display: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      display: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      display: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      display: authStatus,
    },
  ];
  return (
    <div className="sticky top-0 z-20">
      <header className="w-full py-3 shadow bg-[var(--color-secondary-950)]">
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.display ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className=" px-6 py-2 transition-all ease-in-out duration-300 hover:text-[var(--color-primary-500)] font-secondary"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <Link
                  to="/login"
                  onClick={logoutHandler}
                  className="px-6 py-2 transition-all ease-in-out duration-300 hover:text-[var(--color-primary-500)] font-secondary bg-[var(--color-secondary-950)]"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
