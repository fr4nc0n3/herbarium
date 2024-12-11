import Category from "@/components/Category";
import DemoCard from "@/components/DemoCard";
import DemoCard2 from "@/components/DemoCard2";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center p-2">
      <Hero />
      <div className="relative flex flex-col max-w-7xl w-full h-fit mt-16 gap-24">
        <Category />
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
