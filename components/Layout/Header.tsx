"use client";

import Image from "next/image";
import { Button } from "../Buttons/Button";

export const Header = () => {
  return (
    <header>
      <nav className="flex-between">
        <Image
          src="./assets/logos/logo.svg"
          alt="logo - return home"
          width={200}
          height={30}
        />
        <Button
          text="Sign up"
          onClick={() => {}}
          variant="secondary"
          disabled
          className="z-10"
        />
      </nav>
    </header>
  );
};
