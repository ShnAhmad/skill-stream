import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import authService from "../../appwrite/auth";
import { logout as authLogout } from "../../store/authSlice";
import { Menu, X } from "lucide-react"; // ✅ optional icon library (Tailwind-friendly)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

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
    <header className="sticky top-0 z-20 bg-[var(--color-secondary-950)] shadow">
      <nav className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo width="70px" />
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex ml-auto space-x-6">
          {navItems.map(
            (item) =>
              item.display && (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="px-2 py-1 hover:text-[var(--color-primary-500)] transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              )
          )}
          {authStatus && (
            <li>
              <button
                onClick={logoutHandler}
                className="px-2 py-1 hover:text-[var(--color-primary-500)] transition-all duration-200"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-secondary-950)] border-t border-neutral-700">
          <ul className="flex flex-col p-4 space-y-3">
            {navItems.map(
              (item) =>
                item.display && (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 hover:text-[var(--color-primary-500)] transition-all duration-200"
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
                  className="w-full text-left py-2 hover:text-[var(--color-primary-500)] transition-all duration-200"
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
