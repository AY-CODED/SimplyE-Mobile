import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const links = [
    {
        text: "Home",
        path: "/",
    },
    {
        text: "About Us",
        path: "/about",
    },
    {
        text: "Products",
        dropdown: [
            {
                text: "Electric Bikes",
                path: "/products/bikes",
            },
            {
                text: "Electric Tricycles",
                path: "/products/tricycles",
            },
            {
                text: "Electric Cars",
                path: "/products/cars",
            },
        ],
    },
    {
        text: "Fleet Solutions",
        path: "/fleet",
    },
    {
        text: "Use Cases",
        path: "/use-cases",
    },

    {
        text: "Contact Us",
        path: "/contact",
    },
];

const Navbar = () => {
    return (
        <nav className="flex h-fit px-10 justify-between py-3 items-center">
            <ul className="flex gap-8">
                {links
                    .map(({ text, path }) => (
                        <li>
                            <NavLink to={path ? path : null}>{text}</NavLink>
                        </li>
                    ))
                    .slice(0, 3)}
            </ul>
            <Logo size={1} />

            <ul className="flex gap-8 cursor-pointer">
                {links
                    .map(({ text, path }) => (
                        <li>
                            <NavLink to={path ? path : null}>{text}</NavLink>
                        </li>
                    ))
                    .slice(3)}
            </ul>
        </nav>
    );
};

export default Navbar;
