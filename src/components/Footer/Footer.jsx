import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary-950)] py-6">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section */}
        <div>
          <Logo width="100px" />
          <p className="text-sm mt-3">
            &copy; {new Date().getFullYear()} Skill Stream. All rights reserved.
          </p>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-xs font-semibold uppercase mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-base">Account</Link></li>
            <li><Link to="/" className="text-base">Help</Link></li>
            <li><Link to="/" className="text-base">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xs font-semibold uppercase mb-3">Legals</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-base">Terms & Conditions</Link></li>
            <li><Link to="/" className="text-base">Privacy Policy</Link></li>
            <li><Link to="/" className="text-base">Licensing</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
