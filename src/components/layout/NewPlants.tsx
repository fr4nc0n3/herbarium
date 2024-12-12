import React from "react";
import BentoGrid from "../ui/BentoGrid";
import { DemoCard3 } from "../ui/DemoCard";
import { newPlants } from "../../../data";

const NewPlants = () => {
  return (
    <div className="relative flex flex-col gap-y-12">
      <div className="w-fit h-fit text-black font-sans">
        <h1 className="text-7xl font-black">Nuove piante</h1>
      </div>

      <BentoGrid className="md:auto-rows-[25rem] md:grid-cols-4">
        {newPlants.map((item, i) => (
          <DemoCard3
            key={i}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            className="md:col-span-1"
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default NewPlants;
