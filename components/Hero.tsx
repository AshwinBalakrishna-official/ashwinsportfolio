import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

// Type writer package content
const Hero: React.FC<Props> = (props) => {
  const [text, count] = useTypewriter({
    //words : [`Hey!!!! It's Ash and I ❤️`,"Coding", "Exploring", "& Traveling"],
    // words: ["|| 💻CODE💻 ||", "|| 🧋COFFEE🧋 ||", "|| 🌏Travel🌏 ||"],
    words: ["|| CODE ||", "|| COFFEE ||", "|| Travel ||"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="-mt-30 ">
    
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
        {/* ANIMATION BACKGROUND */}
        <BackgroundCircles />

        {/* HERO IMAGE */}
        <Image
          className=" relative rounded-full h-32 w-32 mx-auto object-cover"
          src="/Assets/images/ash2.JPG"
          // src="https://drive.google.com/uc?export=view&id=1c1BzL3xfkSAZVMBEhm5ZLX7r9S-MVtTL"
          width={150}
          height={300}
          alt={"No Image found"}
        />

        {/* INTRO CONTENT */}
        <div className="z-20">
          {/* Title */}
          <h2 className="text-sm uppercase text-gray-600 pb-2 tracking-[15px] ">
            Software engineer
          </h2>

          {/* Hobbies */}
          <h1 className="text-4xl lg:text-5xl font-semibold px-2">
            <span>{text}</span>
            <Cursor cursorColor="#FFA500" />
          </h1>

          {/* Menu TO TRAVEL IN PAGE */}
          <div className="pt-5">
            {/* About Section */}
            <Link href="#about" scroll={false}>
              <button className="heroButton">About</button>
            </Link>

            {/* Experience section */}
            <Link href="#experience" scroll={false}>
              <button className="heroButton">Experience</button>
            </Link>

            {/* SKills Section */}
            <Link href="#skills" scroll={false}>
              <button className="heroButton">Skills</button>
            </Link>

            {/* Projects section */}
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
