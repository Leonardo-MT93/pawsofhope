import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";


export function Collaborators() {
  const collaborators = [
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
    {
      name: "Leonardo Tolaba",
      photo: "https://avatars.githubusercontent.com/u/48159579?v=4",
    },
  ];

  return (
    <section className="w-full relative z-10 sm:p-16 xs:p-8 px-6 py-12"> 
    <h2 className="text-center">Colaboradores</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {collaborators.map((collaborator, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/6"
            >
              <div className="p-1 w-full">
                <Card className="w-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6 w-full h-auto ">
                    <img src={collaborator.photo} alt={collaborator.name} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
