import AdoptionCard from "@/components/AdoptionCard";

import { animals } from "@/constants/AdoptionAnimals";

const AdoptionPage = () => {
  return (
    <section className="flex items-center flex-col w-full min-h-screen relative px-4 pb-4">
      <h1 className="w-full my-10 text-4xl md:text-5xl text-center font-bold">
        Lista de animales para adopción ó transito
      </h1>
      <div className="w-full h-auto flex items-center justify-center flex-wrap gap-4">
        {animals.map((animal) => (
          <AdoptionCard
            key={animal.id}
            id={animal.id}
            name={animal.name}
            image={animal.image}
            description={animal.description}
            characteristics={animal.characteristics}
          />
        ))}
      </div>
    </section>
  );
};

export default AdoptionPage;
