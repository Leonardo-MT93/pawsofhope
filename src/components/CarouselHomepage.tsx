import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import carousel1 from "../images/carouselimage1.jpg";
import carousel2 from "../images/carouselimage2.jpg";
import carousel3 from "../images/carouselimage3.jpg";
import Autoplay  from "embla-carousel-autoplay";

const CarouselHomepage = () => {
  
  return (
    <div className="w-full flex justify-center  md:p-0 md:mt-4 overflow-hidden">
      <Carousel className="w-full cursor-grab select-none" plugins={[Autoplay({delay:4000,}),]}>
        <CarouselContent>
          <CarouselItem>
            <div className="w-full  flex items-center justify-center">
              <Card className="flex relative w-full h-[80vh] md:h-[80vh] rounded-sm md:rounded-xl overflow-hidden">
                <CardContent className="w-full px-0 py-0 absolute inset-0 overflow-hidden ">
                  <img
                    src={carousel1}
                    alt="."
                    className="w-full h-full object-cover"
                  />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                </CardContent>
                
              </Card>
              <div className="absolute z-10 flex flex-col justify-center items-center h-full text-center w-full">
                <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
                  No compres, adopta!
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Los animales no son cosas, son seres vivos y sienten como nosotros. Animate a adoptar!
                </p>
                <a
                  href="#"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Quiero adoptar!
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full  flex items-center justify-center">
              <Card className="flex relative w-full h-[80vh] md:h-[80vh] rounded-sm md:rounded-xl overflow-hidden">
                <CardContent className="w-full px-0 py-0 absolute inset-0 overflow-hidden ">
                  <img
                    src={carousel2}
                    alt="."
                    className="w-full h-full object-cover"
                  />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                </CardContent>
                
              </Card>
              <div className="absolute z-10 flex flex-col justify-center items-center h-full text-center w-full">
                <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
                  Ayudanos a seguir rescatando!
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Todos los días rescatamos animales en situacion de calle, y necesitamos ayuda de donaciones para poder seguir haciéndolo!
                </p>
                <a
                  href="#"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Quiero donar!
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full  flex items-center justify-center">
              <Card className="flex relative w-full h-[80vh] md:h-[80vh] rounded-sm md:rounded-xl overflow-hidden">
                <CardContent className="w-full px-0 py-0 absolute inset-0 overflow-hidden ">
                  <img
                    src={carousel3}
                    alt="."
                    className="w-full h-full object-cover"
                  />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                </CardContent>
                
              </Card>
              <div className="absolute z-10 flex flex-col justify-center items-center h-full text-center w-full">
                <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
                  Brinda refugio a un animal!
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Si queres ayudar pero no podes adoptar, podés brindar refugio a un animal!
                </p>
                <a
                  href="#"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Quiero ayudar!
                </a>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselHomepage;
