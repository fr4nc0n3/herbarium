import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-fit flex justify-center items-center overflow-hidden py-60 px-10 rounded-3xl">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        quality={100}
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="brightness"
      />
      <div className="relative flex flex-col overflow-hidden">
        <h1 className="text-left text-white text-3xl font-black">scopri</h1>
        <h1 className="text-center text-white text-9xl font-black ">
          herbarium
        </h1>
        <p className="mt-8 text-left max-w-md text-xl/7 font-normal">
          Conosci, esplora e approfondisci il mondo delle piante, da ogni angolo
          del pianeta.
        </p>
      </div>
    </div>
  );
};

export default Hero;
