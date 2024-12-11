import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
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
        "row-span-1 rounded-2xl group/bento p-4 bg-white border drop-shadow-xl justify-between flex flex-col",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt="Hero background"
        quality={100}
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="rounded-2xl"
      />
      <div className="relative flex w-full items-end justify-end">
        <button className="w-fit h-fit px-2 py-2 bg-transparent border-2 border-white text-white rounded-full">
          <FaArrowRight />
        </button>
      </div>
      <div className="relative h-full flex flex-col justify-end items-start">
        <div className="w-full h-fit rounded-2xl p-2 font-sans text-white">
          <div className="font-bold text-5xl mb-2">{title}</div>
          <div className="font-light text-base">{description}</div>
        </div>
      </div>
    </div>
  );
};
