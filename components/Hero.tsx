"use client";

import Image from "next/image";

import { Button } from "./Buttons/Button";

const title = "Find, book, rent a car - quick and super easy!";
const description =
  "Streamline your car rental experience with our effortless booking process";

export const Hero = () => {
  const scrollToCars = () => {};

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36">
        <h1>{title}</h1>
        <h2 className="my-4">{description}</h2>
        <Button text="Explore cars" onClick={scrollToCars} />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end xl:h-screen">
        <Image
          src="/assets/images/hero.png"
          alt="hero"
          width={700}
          height={700}
          className="absolute top-36 right-0"
        />
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </div>
  );
};
