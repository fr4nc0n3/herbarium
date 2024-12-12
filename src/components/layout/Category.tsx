import React from "react";
import BentoGrid from "../ui/BentoGrid";
import { category } from "../../../data";
import ImageCard from "../ui/ImageCard";

const Category = () => {
  return (
    <div className="relative flex flex-col gap-y-12">
      <div className="w-fit h-fit text-black font-sans">
        <h1 className="text-7xl font-black">Categorie</h1>
      </div>
      <BentoGrid className="md:grid-cols-3">
        {category.map((item, i) => (
          <ImageCard
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
