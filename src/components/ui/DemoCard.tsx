import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "../../../lib/utils";

export const DemoCard1 = ({
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
          src="/tree.jpg"
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

export const DemoCard2 = ({
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
        sizes="50vw"
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

export const DemoCard3 = ({
  title,
  imageUrl,
  description,
  className,
}: {
  title: string;
  imageUrl: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col row-span-1 rounded-2xl p-8 drop-shadow-xl",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt="Hero background"
        quality={100}
        fill
        priority
        sizes="50vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="rounded-2xl brightness-75"
      />

      <div className="relative h-full flex flex-col font-sans text-white gap-y-6">
        <div className="font-bold text-5xl">{title}</div>
        <div className="flex grow justify-start items-center font-light text-base">
          {description}
        </div>
        <hr className="relative w-full border-t-2 border-gray-400/60" />
        <Button
          variant="text-icon"
          text="Scopri"
          icon={<FaArrowRight />}
          className="bg-gray-400/50 border-white text-white"
        />
      </div>
    </div>
  );
};
