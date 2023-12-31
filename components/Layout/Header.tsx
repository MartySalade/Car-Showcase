"use client";

import Image from "next/image";
import { Button } from "../Buttons/Button";

export const Header = () => {
  return (
    <header className="z-10">
      <nav className="flex-between w-full">
        <Image
          src="./assets/logos/logo.svg"
          alt="logo - return home"
          width={200}
          height={30}
        />
        <Button text="Sign up" onClick={() => {}} disabled className="z-10" />
      </nav>
    </header>
  );
};
