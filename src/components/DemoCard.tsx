import React from "react";
import Image from "next/image";

const DemoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative max-w-md w-full h-full bg-white border drop-shadow-xl p-5 rounded-3xl">
      <div className="flex flex-col gap-y-2">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          width={500}
          height={500}
          className="rounded-2xl"
        />
        <h1 className="text-black text-4xl font-sans font-black mt-2">
          {title}
        </h1>
        <p className="text-black text-md font-sans font-normal mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DemoCard;
