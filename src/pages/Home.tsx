import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <>
      {/* <head>
        <title>Pawns of Hope</title>
        <meta name="description" content="Homepage de Paws of Hope. Proyecto cuyo fin es el de ayudar a los distintos refugios que ayudan a los animales abandonados." />
        <meta name="author" content="Leonardo Manuel Tolaba"/>
      </head> */}
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light md:items-start  xs:items-start border border-red-500">
        <div className="w-full flex justify-center">
          <Carousel className="w-full max-w-screen-2xl h-52">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex h-[30vh] items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
    </>
  );
};

export default Home;
