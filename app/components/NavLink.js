"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;
  return (
    <Link
      href={path}
      className={` ${
        active ? "text-blue-600" : ""
      } block py-2 pr-4 pl-3 rounded bg-primary-700 lg:p-0
      aria-current="page`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
