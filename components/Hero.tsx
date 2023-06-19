"use client";

import Image from "next/image";

import { Button } from "./Buttons/Button";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

const title = "Find, book, rent a car - quick and super easy!";
const description =
  "Streamline your car rental experience with our effortless booking process";

type HeroProps = {
  handleClick: () => void;
};

export const Hero = ({ handleClick }: HeroProps) => {
  const [titleAnim, setTitleAnim] = useState(false);
  const [descAnim, setDescAnim] = useState(false);
  const [buttonAnim, setButtonAnim] = useState(false);
  const [imageAnim, setImageAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTitleAnim(true);
    }, 200);
    setTimeout(() => {
      setDescAnim(true);
    }, 600);
    setTimeout(() => {
      setImageAnim(true);
    }, 1000);
    setTimeout(() => {
      setButtonAnim(true);
    }, 1400);
  }, []);

  return (
    <div className="h-screen flex xl:flex-row flex-col relative z-0 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex-1 xl:pt-36 md:pt-24 pt-12 flex flex-col md:gap-4">
        <Transition
          show={titleAnim}
          enter="transition-all ease-in-out duration-500 delay-[200ms]"
          enterFrom="opacity-0 translate-y-[-4rem]"
          enterTo="opacity-100 translate-y-0"
        >
          <h1 className="header-1">{title}</h1>
        </Transition>
        <Transition
          show={descAnim}
          enter="transition-all ease-in-out duration-500 delay-[200ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <h2 className="header-2 my-4">{description}</h2>
        </Transition>
        <Transition
          show={buttonAnim}
          enter="transition-all ease-in-out duration-500 delay-[200ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <Button text="Explore cars" onClick={handleClick} className="ml-1" />
          <div className="absolute bg-hero-bg bg-repeat-round xl:w-1/2 xl:h-2/3 right-6 xl:top-20 md:w-2/3 md:h-96 md:top-72 -z-10 w-0" />
        </Transition>
      </div>

      <div className="flex-1 relative flex items-center justify-end">
        <Transition
          show={imageAnim}
          enter="transition-all ease-in-out duration-300 delay-[200ms]"
          enterFrom="opacity-0 translate-y-[8rem]"
          enterTo="opacity-100 translate-y-0"
        >
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={650}
            height={650}
            className="xl:top-0 top-12 right-0"
          />
        </Transition>

        {/* <div className="absolute xl:-top-[17rem] md:-top-36 -top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen md:h-[490px] h-[250px] overflow-hidden" /> */}
      </div>
    </div>
  );
};
