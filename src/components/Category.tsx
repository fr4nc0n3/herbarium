import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { category } from "../../data";

const Category = () => {
  return (
    <div className="relative flex flex-col gap-y-12">
      <div className="w-fit h-fit text-black font-sans">
        <h1 className="text-7xl font-black">Categorie</h1>
      </div>
      <BentoGrid className="w-full md:auto-rows-[20rem]">
        {category.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Category;
