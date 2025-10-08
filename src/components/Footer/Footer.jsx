import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--color-secondary-950)] text-gray-300 border-t border-[var(--color-secondary-800)]">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <Logo width="120px" />
          <p className="text-sm mt-4 text-gray-400 leading-relaxed max-w-xs">
            Skill Stream — a place where developers share their coding journeys,
            projects, and growth stories to inspire others.
          </p>
          <p className="text-xs mt-5 text-gray-500">
            &copy; {new Date().getFullYear()} Skill Stream. All rights reserved.
          </p>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary-400)] mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-[var(--color-primary-500)] transition-colors duration-300"
              >
                Account
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-[var(--color-primary-500)] transition-colors duration-300"
              >
                Help
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-[var(--color-primary-500)] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary-400)] mb-4">
            Legals
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-[var(--color-primary-500)] transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-[var(--color-primary-500)] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-[var(--color-primary-500)] transition-colors duration-300"
              >
                Licensing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
