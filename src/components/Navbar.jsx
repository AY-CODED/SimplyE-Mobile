import { useState, useEffect } from "react";
// We must use 'Link' here for programmatic navigation to the homepage
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // icons
import Logo from "./Logo"; // Assuming Logo component exists

// MODIFIED LINKS: Use #IDs for scrolling sections and keep /paths for separate pages
const links = [
  // Links that scroll down to a section on the same page (use #id)
  { text: "Home", path: "#home" },
  { text: "About Us", path: "#about" },
  {
    text: "Products",
    dropdown: [
      // These will still navigate to separate product pages
      { text: "Electric Bikes", path: "/products/bikes" },
      { text: "Electric Tricycles", path: "/products/tricycles" },
      { text: "Electric Cars", path: "/products/cars" },
    ],
  },
  { text: "Fleet Solutions", path: "#fleet" }, // Link that scrolls
  { text: "Use Cases", path: "#use-cases" },   // Link that scrolls
  // This will still navigate to a separate contact page
  { text: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const location = useLocation(); // Hook to get current route

  // scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW SCROLL HANDLER FUNCTION
  const handleScrollToSection = (id) => {
    const targetId = id.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      // If on the homepage and element exists, scroll smoothly
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // If not on the homepage, or if the page just changed, the scroll will happen
    // naturally because the Link component will set the hash in the URL.

    setIsOpen(false);
  };

  // Function to determine if a link should use a custom scroll or a standard Link/NavLink
  const LinkComponent = ({ link, children }) => {
    // Check if we are on the homepage ('/')
    const isHomePage = location.pathname === '/';

    if (link.path && link.path.startsWith("#")) {
      // For internal scrolling links:
      if (isHomePage) {
        // 1. If we are on the homepage, use an <a> tag and the scroll handler directly
        return (
          <a
            href={link.path}
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection(link.path);
            }}
            // Active styling logic for homepage sections
            className={`hover:text-blue-600 transition ${window.location.hash === link.path ? "text-blue-600 font-medium" : "text-gray-700"}`}
          >
            {children}
          </a>
        );
      } else {
        // 2. If we are NOT on the homepage, use the Link component to navigate to home
        //    The hash (#id) in the URL will automatically trigger the scroll after navigation.
        return (
          <Link
            to={`/${link.path}`} // Navigate to the root path with the hash
            onClick={() => setIsOpen(false)} // Close menu on click
            // Use standard styling as active state is complex across pages
            className="hover:text-blue-600 transition text-gray-700"
          >
            {children}
          </Link>
        );
      }
    }

    // For external or dropdown links (paths starting with '/')
    return (
      <NavLink
        to={link.path || "#"}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `hover:text-blue-600 transition ${isActive ? "text-blue-600 font-medium" : "text-gray-700"}`
        }
      >
        {children}
      </NavLink>
    );
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition ${scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
    >
      <div className="flex justify-between items-center px-6 py-4">

        {/* Left side links (desktop only) */}
        <ul className="hidden md:flex gap-8 relative">
          {links.slice(0, 3).map((link, i) => (
            <li key={i} className="relative group">
              {link.dropdown ? (
                // Dropdown logic remains the same
                <>
                  <span className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                    {link.text} <ChevronDown size={16} />
                  </span>
                  <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-48">
                    {link.dropdown.map((item, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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

          {/* CTA */}
          {/* You can re-enable this later */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {links.map((link, i) => (
              <li key={i}>
                {link.dropdown ? (
                  <>
                    {/* Toggle dropdown */}
                    <button
                      className="flex justify-between items-center w-full text-gray-700 hover:text-blue-600"
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
                                `block hover:text-blue-600 transition ${isActive
                                  ? "text-blue-600 font-medium"
                                  : "text-gray-700"
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

            {/* CTA (mobile) */}
            {/* You can re-enable this later */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;