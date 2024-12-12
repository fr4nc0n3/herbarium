import Category from "@/components/layout/Category";
import Hero from "@/components/layout/Hero";
import NewPlants from "@/components/layout/NewPlants";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center p-2">
      <Hero />
      <div className="relative flex flex-col max-w-7xl w-full h-fit mt-16 gap-24">
        <NewPlants />
        <Category />
      </div>
    </main>
  );
}
