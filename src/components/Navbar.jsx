import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const links = [
  { text: "Home", path: "#home" },
  { text: "About Us", path: "#about" },
  {
    text: "Products",
    dropdown: [
      { text: "Electric Bikes", path: "/products/bikes" },
      { text: "Electric Tricycles", path: "/products/tricycles" },
      { text: "Electric Cars", path: "/products/cars" },
    ],
  },
  { text: "Fleet Solutions", path: "#fleet" },
  { text: "Use Cases", path: "#use-cases" },
  { text: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const targetId = id.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const LinkComponent = ({ link, children }) => {
    const isHomePage = location.pathname === "/";

    if (link.path && link.path.startsWith("#")) {
      if (isHomePage) {
        return (
          <a
            href={link.path}
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection(link.path);
            }}
            className={`transition ${window.location.hash === link.path
                ? "text-blue-500 font-medium"
                : scrolled
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-white hover:text-blue-400"
              }`}
          >
            {children}
          </a>
        );
      } else {
        return (
          <Link
            to={`/${link.path}`}
            onClick={() => setIsOpen(false)}
            className={`transition ${scrolled
                ? "text-blue-900 hover:text-blue-900"
                : "text-white hover:text-blue-400"
              }`}
          >
            {children}
          </Link>
        );
      }
    }

    return (
      <NavLink
        to={link.path || "#"}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `transition ${isActive
            ? "text-blue-500 font-medium"
            : scrolled
              ? "text-blue-500 hover:text-blue-600"
              : "text-white hover:text-blue-400"
          }`
        }
      >
        {children}
      </NavLink>
    );
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition ${scrolled
          ? "bg-transparent shadow-md border backdrop-blur-3xl border-white/20"
          : "bg-transparent backdrop:blur-3xl border-white/10"
        }`}  
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left side links (desktop only) */}
        <ul className="hidden md:flex gap-8 relative">
          {links.slice(0, 3).map((link, i) => (
            <li key={i} className="relative group">
              {link.dropdown ? (
                <>
                  <span
                    className={`flex items-center gap-1 cursor-pointer transition ${scrolled
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-white hover:text-blue-400"
                      }`}
                  >
                    {link.text} <ChevronDown size={16} />
                  </span>
                  <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white/20 backdrop-blur-lg shadow-lg rounded-md w-48 border border-white/20">
                    {link.dropdown.map((item, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={item.path}
                          className={`block px-4 py-2 transition ${scrolled
                              ? "text-blue-500 hover:text-blue-600"
                              : "text-white hover:text-blue-400"
                            }`}
                        >
                          {item.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <LinkComponent link={link}>{link.text}</LinkComponent>
              )}
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Logo size={1} />

        {/* Right side links (desktop only) */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.slice(3).map((link, i) => (
            <li key={i}>
              <LinkComponent link={link}>{link.text}</LinkComponent>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition ${scrolled ? "text-blue-500" : "text-white"
            }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg shadow-lg border-t border-white/20">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {links.map((link, i) => (
              <li key={i}>
                {link.dropdown ? (
                  <>
                    <button
                      className={`flex justify-between items-center w-full transition ${scrolled
                          ? "text-blue-500 hover:text-blue-600"
                          : "text-white hover:text-blue-400"
                        }`}
                      onClick={() => setMobileDropdown(!mobileDropdown)}
                    >
                      {link.text} <ChevronDown size={16} />
                    </button>
                    {mobileDropdown && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {link.dropdown.map((item, idx) => (
                          <li key={idx}>
                            <NavLink
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className={({ isActive }) =>
                                `block transition ${isActive
                                  ? "text-blue-500 font-medium"
                                  : scrolled
                                    ? "text-blue-500 hover:text-blue-600"
                                    : "text-white hover:text-blue-400"
                                }`
                              }
                            >
                              {item.text}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <LinkComponent link={link}>{link.text}</LinkComponent>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
