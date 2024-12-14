import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Contact us", href: "/contact" },
];

export function HeaderNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.href}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
