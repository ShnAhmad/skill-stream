import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import authService from "../../appwrite/auth";
import { logout as authLogout } from "../../store/authSlice";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const location = useLocation();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(authLogout());
    });
  };

  const navItems = [
    { name: "Home", slug: "/", display: true },
    { name: "Login", slug: "/login", display: !authStatus },
    { name: "Signup", slug: "/signup", display: !authStatus },
    { name: "All Posts", slug: "/all-posts", display: authStatus },
    { name: "Add Post", slug: "/add-post", display: authStatus },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[var(--color-secondary-950)]/95 backdrop-blur-md border-b border-[var(--color-secondary-800)] shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
      <nav className="flex items-center justify-between px-5 md:px-10 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo width="80px" />
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-[var(--color-secondary-100)] hover:text-[var(--color-primary-500)] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center ml-auto space-x-8 text-[var(--color-secondary-100)] font-medium">
          {navItems.map(
            (item) =>
              item.display && (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className={`relative transition-all duration-300 hover:text-[var(--color-primary-500)] ${
                      location.pathname === item.slug
                        ? "text-[var(--color-primary-500)]"
                        : ""
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.slug && (
                      <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-[var(--color-primary-600)] rounded"></span>
                    )}
                  </Link>
                </li>
              )
          )}
          {authStatus && (
            <li>
              <button
                onClick={logoutHandler}
                className="px-3 py-1 rounded-md border border-transparent hover:border-[var(--color-primary-600)] hover:text-[var(--color-primary-500)] transition-all duration-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-secondary-950)] border-t border-[var(--color-secondary-800)] animate-slideDown">
          <ul className="flex flex-col p-4 space-y-3 text-[var(--color-secondary-100)] font-medium">
            {navItems.map(
              (item) =>
                item.display && (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-2 px-1 rounded-md transition-all duration-300 hover:text-[var(--color-primary-500)] ${
                        location.pathname === item.slug
                          ? "text-[var(--color-primary-500)]"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <button
                  onClick={() => {
                    logoutHandler();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-1 rounded-md hover:text-[var(--color-primary-500)] transition-all duration-300"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
