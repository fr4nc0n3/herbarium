import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "../../../lib/utils";

const ImageCard = ({
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
        "relative flex flex-col row-span-1 rounded-2xl p-6 drop-shadow-xl",
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
        className="rounded-2xl"
      />
      <div className="relative flex items-end justify-end">
        <Button
          variant="icon"
          icon={<FaArrowRight />}
          className="bg-transparent border-white text-white"
        />
      </div>
      <div className="relative h-full flex flex-col justify-end items-start font-sans text-white gap-y-2">
        <div className="font-bold text-5xl">{title}</div>
        <div className="font-light text-base">{description}</div>
      </div>
    </div>
  );
};

export default ImageCard;
