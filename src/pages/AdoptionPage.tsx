import AdoptionCard from "@/components/AdoptionCard";



const AdoptionPage = () => {

  const animals = [
    {
      "id": "1",
      "name": "Rocky",
      "image": "https://http.cat/images/100.jpg",
      "description": "Rocky es un perrito muy activo que disfruta de largas caminatas y jugar al aire libre. Es amigable con otros perros y le encanta recibir cariño."
    },
    {
      "id": "2",
      "name": "Luna",
      "image": "https://http.cat/images/101.jpg",
      "description": "Luna es una perrita muy cariñosa y le encanta estar cerca de las personas. Es juguetona y le gusta correr en el parque."
    },
    {
      "id": "3",
      "name": "Max",
      "image": "https://http.cat/images/102.jpg",
      "description": "Max es un perrito tranquilo que disfruta de la compañía de su familia. Le gusta descansar al sol y recibir mimos."
    },
    {
      "id": "4",
      "name": "Bella",
      "image": "https://http.cat/images/103.jpg",
      "description": "Bella es una perrita muy tierna y le encanta jugar con pelotas. Es muy sociable y le gusta conocer a otros perros."
    },
    {
      "id": "5",
      "name": "Coco",
      "image": "https://http.cat/images/200.jpg",
      "description": "Coco es un perrito muy curioso y le encanta explorar su entorno. Es inteligente y aprende rápidamente nuevos trucos."
    },
    {
      "id": "6",
      "name": "Toby",
      "image": "https://http.cat/images/201.jpg",
      "description": "Toby es un perrito muy juguetón que siempre está lleno de energía. Le gusta correr y saltar, y es muy divertido de tener cerca."
    },
    {
      "id": "7",
      "name": "Daisy",
      "image": "https://http.cat/images/202.jpg",
      "description": "Daisy es una perrita muy amorosa que siempre busca atención. Le gusta pasear y disfrutar del aire libre."
    },
    {
      "id": "8",
      "name": "Charlie",
      "image": "https://http.cat/images/203.jpg",
      "description": "Charlie es un perrito muy leal que siempre está atento a su familia. Es protector y cariñoso con los niños."
    },
    {
      "id": "9",
      "name": "Lucky",
      "image": "https://http.cat/images/204.jpg",
      "description": "Lucky es un perrito alegre y juguetón que siempre tiene una sonrisa en su rostro. Le gusta jugar con otros perros."
    },
    {
      "id": "10",
      "name": "Molly",
      "image": "https://http.cat/images/205.jpg",
      "description": "Molly es una perrita muy dulce que siempre busca cariño. Le gusta acurrucarse en el sofá y dormir siestas."
    },
    {
      "id": "11",
      "name": "Rex",
      "image": "https://http.cat/images/206.jpg",
      "description": "Rex es un perrito valiente y lleno de energía. Le gusta correr y jugar al aire libre."
    },
    {
      "id": "12",
      "name": "Buddy",
      "image": "https://http.cat/images/207.jpg",
      "description": "Buddy es un perrito muy fiel que siempre está al lado de su familia. Le gusta dar largos paseos y explorar nuevos lugares."
    },
    {
      "id": "13",
      "name": "Maggie",
      "image": "https://http.cat/images/208.jpg",
      "description": "Maggie es una perrita muy dulce y cariñosa. Le gusta jugar con otros perros y recibir caricias."
    },
    {
      "id": "14",
      "name": "Oscar",
      "image": "https://http.cat/images/305.jpg",
      "description": "Oscar es un perrito muy inteligente y aprende rápido. Le gusta aprender nuevos trucos y recibir premios."
    },
    {
      "id": "15",
      "name": "Ginger",
      "image": "https://http.cat/images/408.jpg",
      "description": "Ginger es una perrita muy activa y juguetona. Le gusta correr y jugar al aire libre."
    }
  ];
  

  return (
    <>
      <main className="w-full min-h-screen">
        <section className="w-full min-h-screen relative sm:p-16 xs:p-8 px-4 py-4 border border-red-500">
          <h2 className="mb-[30px] text-4xl md:text-5xl text-center">
            Lista de animales en adopción
          </h2>
          <div className="w-full h-auto flex items-center justify-center flex-wrap gap-4 border border-blue-500">
              {
                animals.map((animal)=> (
                  <AdoptionCard key={animal.id} name={animal.name} image={animal.image} description={animal.description}/>
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
