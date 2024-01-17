import AdoptionCard from "@/components/AdoptionCard";

import {animals} from "@/constants/AdoptionAnimals";

const AdoptionPage = () => {


  return (
    <>
      <main className="w-full min-h-screen">
        <section className="w-full min-h-screen relative sm:p-16 xs:p-8 px-4 py-4">
          <h2 className="mb-[30px] text-4xl sm:text-5xl text-center">
            Lista de animales para adopción ó transito
          </h2>
          <div className="w-full h-auto flex items-center justify-center flex-wrap gap-4">
              {
                animals.map((animal)=> (
                  <AdoptionCard key={animal.id} id={animal.id} name={animal.name} image={animal.image} description={animal.description}
                    size={animal.size} status={animal.status} characteristics={animal.characteristics}
                  />
                )
                )
              }
            </div>
        </section>
      </main>
    </>
  );
};

export default AdoptionPage;
