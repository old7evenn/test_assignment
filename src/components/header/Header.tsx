import React from "react";
import { Button } from "../button/Button";
import logo from '@/assets/icons/logo.svg'
import { Link } from "../link/Link";

export const Header = () => {
  return (
    <header className="h-[3.75rem] w-full bg-white fixed t-0 sm_custom:px-4  md:px-8 lg:px-16 z-50">
      <nav className="flex items-center justify-between h-full max-w-screen-xl mx-auto">
        <Link href="home" className="cursor-pointer">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="users">
              <Button>Users</Button>
            </Link>
          </li>
          <li>
            <Link href="signup">
              <Button>Sign up</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};
