import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

// Type writer package content
const Hero: React.FC<Props> = (props) => {
  const [text, count] = useTypewriter({
    words: ["|| CODE ||", "|| COFFEE ||", "|| Travel ||"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="relative min-h-[100dvh] flex flex-col space-y-6 sm:space-y-8 items-center justify-center text-center overflow-hidden px-4 py-20">
      {/* ANIMATION BACKGROUND */}
      <BackgroundCircles />

      {/* HERO IMAGE */}
      <Image
        className="relative rounded-full h-28 w-28 sm:h-32 sm:w-32 mx-auto object-cover"
        src="/Assets/images/ash2.JPG"
        width={150}
        height={300}
        alt={"No Image found"}
      />

      {/* INTRO CONTENT */}
      <div className="z-20">
        {/* Title */}
        <h2 className="text-base sm:text-xl uppercase text-gray-600 pb-2 tracking-[3px] sm:tracking-[5px]">
          Frontend Architect
        </h2>

        {/* Hobbies */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold px-2">
          <span>{text}</span>
          <Cursor cursorColor="#FFA500" />
        </h1>

        {/* Menu TO TRAVEL IN PAGE */}
        <div className="pt-5 flex flex-wrap justify-center gap-2">
          <Link href="#about" scroll={false}>
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience" scroll={false}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills" scroll={false}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects" scroll={false}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
