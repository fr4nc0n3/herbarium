import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import DemoCard from "@/components/DemoCard";
import DemoCard2 from "@/components/DemoCard2";
import Hero from "@/components/Hero";
import { category } from "../../data";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center p-2">
      <Hero />
      <div className="relative flex flex-col max-w-7xl w-full h-fit p-6 gap-4">
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

        <DemoCard
          title="Alberi"
          description="Piante perenni con tronco legnoso e chioma, fondamentali per l'ecosistema e fonte di ossigeno, habitat e risorse naturali."
        />

        <DemoCard2
          title="Alberi"
          description="Piante perenni con tronco legnoso e chioma, fondamentali per l'ecosistema e fonte di ossigeno, habitat e risorse naturali."
        />
      </div>
    </main>
  );
}
