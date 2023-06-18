"use client";

import Image from "next/image";

import { Button } from "./Buttons/Button";

const title = "Find, book, rent a car - quick and super easy!";
const description =
  "Streamline your car rental experience with our effortless booking process";

type HeroProps = {
  handleClick: () => void;
};

export const Hero = ({ handleClick }: HeroProps) => {
  return (
    <div className="h-screen flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 xl:pt-36 md:pt-24 pt-12 flex flex-col md:gap-4">
        <h1 className="header-1">{title}</h1>
        <h2 className="header-2 my-4">{description}</h2>
        <Button text="Explore cars" onClick={handleClick} />
      </div>
      <div className="relative xl:flex-[1.5] flex items-center justify-end xl:pt-36">
        <Image
          src="/assets/images/hero.png"
          alt="hero"
          width={650}
          height={650}
          className="xl:top-36 top-12 right-0"
        />
        <div className="absolute xl:-top-[17rem] md:-top-36 -top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen md:h-[490px] h-[250px] overflow-hidden" />
      </div>
    </div>
  );
};
