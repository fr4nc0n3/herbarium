import React from "react";
import Image from "next/image";

const DemoCard2 = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex flex-col max-w-md w-full h-fit justify-center items-start border drop-shadow-xl p-10 rounded-3xl gap-y-4 ${className}`}
    >
      <Image
        src="/tree.jpg"
        alt="Hero background"
        quality={100}
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="brightness-50 rounded-2xl"
      />

      <h1 className="relative text-6xl font-sans font-black">{title}</h1>
      <p className="relative grow text-md font-sans font-normal flex items-center">
        {description}
      </p>
      <hr className="relative w-full border-t-2 border-gray-400/60 my-4" />
      <button className="relative px-4 py-2 rounded-full border border-white bg-gray-400/50 text-sm">
        Scopri
      </button>
    </div>
  );
};

export default DemoCard2;
