"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    link:any
}

const NavLink:React.FC<NavLinkProps> = ({link}) => {

  const pathName = usePathname();

  return (
    <>
    <Link href={link.url} className={`rounded p-1 ${pathName === link.url && " bg-black text-white" }`}>
      {link.title}
    </Link>
    </>
  );
};

export default NavLink;