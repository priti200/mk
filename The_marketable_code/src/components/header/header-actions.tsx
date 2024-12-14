import { Search, ShoppingCart, Menu } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { NavLink } from "react-router-dom";

interface HeaderActionsProps {
  onOpenMobileMenu: () => void;
}

export function HeaderActions({ onOpenMobileMenu }: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1.5">
        <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Want to learn?"
          className="bg-transparent border-none focus:outline-none px-2 w-40 text-sm"
        />
      </div>

      <ThemeToggle />
      <button className="hidden md:block relative">
        <ShoppingCart className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          0
        </span>
      </button>
      <NavLink
        to={"/login"}
        className="hidden md:block bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
      >
        Login
      </NavLink>

      <button
        onClick={onOpenMobileMenu}
        className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
}
