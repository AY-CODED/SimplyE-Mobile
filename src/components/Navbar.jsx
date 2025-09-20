import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import Logo from "./Logo";

const links = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/about" },
  {
    text: "Products",
    dropdown: [
      { text: "Electric Bikes", path: "/products/bikes" },
      { text: "Electric Tricycles", path: "/products/tricycles" },
      { text: "Electric Cars", path: "/products/cars" },
    ],
  },
  { text: "Fleet Solutions", path: "/fleet" },
  { text: "Use Cases", path: "/use-cases" },
  { text: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left side links (desktop only) */}
        <ul className="hidden md:flex gap-8">
          {links.slice(0, 3).map(({ text, path }, i) => (
            <li key={i}>
              <NavLink
                to={path || "#"}
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-700"
                  }`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Logo size={1} />

        {/* Right side links (desktop only) */}
        <ul className="hidden md:flex gap-8">
          {links.slice(3).map(({ text, path }, i) => (
            <li key={i}>
              <NavLink
                to={path || "#"}
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-700"
                  }`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (only shows when open) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {links.map(({ text, path }, i) => (
              <li key={i}>
                <NavLink
                  to={path || "#"}
                  onClick={() => setIsOpen(false)} // close on click
                  className={({ isActive }) =>
                    `block hover:text-blue-600 transition ${
                      isActive ? "text-blue-600 font-medium" : "text-gray-700"
                    }`
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
