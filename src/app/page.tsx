import DemoCard from "@/components/DemoCard";
import DemoCard2 from "@/components/DemoCard2";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center p-2">
      <Hero />
      <div className="relative flex flex-row max-w-7xl w-full h-fit p-6 gap-4">
        <DemoCard2
          title="Felci"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt eget urna et viverra. Donec in lacinia ante, quis sagittis
          odio. Nunc auctor lorem ut rhoncus vestibulum."
          className="grow"
        />
        <DemoCard2
          title="Felci"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt eget urna et viverra. Donec in lacinia ante, quis sagittis
          odio. Nunc auctor lorem ut rhoncus vestibulum."
          className="grow"
        />
        <DemoCard2
          title="Felci"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt eget urna et viverra. Donec in lacinia ante, quis sagittis
          odio. Nunc auctor lorem ut rhoncus vestibulum."
          className="grow"
        />
      </div>
      <div className="relative flex flex-row max-w-7xl w-full h-fit p-6 gap-4">
        <DemoCard
          title="Felci"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt eget urna et viverra. Donec in lacinia ante, quis sagittis
          odio. Nunc auctor lorem ut rhoncus vestibulum."
        />
        <DemoCard
          title="Felci"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt eget urna et viverra. Donec in lacinia ante, quis sagittis
          odio. Nunc auctor lorem ut rhoncus vestibulum."
        />
        <DemoCard
          title="Felci"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt eget urna et viverra. Donec in lacinia ante, quis sagittis
          odio. Nunc auctor lorem ut rhoncus vestibulum."
        />
      </div>
    </main>
  );
}
