import { NavLink } from "react-router-dom";

export function HeaderBrand() {
  return (
    <div className="flex items-center space-x-2">
      <NavLink to={"/"}>
        <img src="/svg/logo.svg" alt="" className="w-10 rounded-md" />
      </NavLink>
      <span className="text-xl font-bold">Marketable</span>
    </div>
  );
}
