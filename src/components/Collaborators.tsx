import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import colaborator0 from "../images/colaborator0.png";
import colaborator1 from "../images/colaborator1.png";
import colaborator2 from "../images/colaborator2.png";
import colaborator3 from "../images/colaborator3.png";
import colaborator4 from "../images/colaborator4.png";
import colaborator5 from "../images/colaborator5.png";
import colaborator6 from "../images/colaborator6.png";
import colaborator7 from "../images/colaborator7.png";
import colaborator8 from "../images/colaborator8.png";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

export function Collaborators() {
  return (
    <section className="w-full relative px-4">
      <h2 className="w-full my-10 text-4xl md:text-5xl text-center">
        Colaboradores
      </h2>
      <Carousel className="w-full "  plugins={[Autoplay({ delay: 4000 })]}>
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <Link to="https://www.google.com">
                    <img
                      src={colaborator0}
                      alt="something"
                      className=" w-full filter grayscale object-contain"
                    />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <img
                    src={colaborator1}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <img
                    src={colaborator2}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <img
                    src={colaborator3}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <img
                    src={colaborator4}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden  ">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <img
                    src={colaborator5}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400   overflow-hidden">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <img
                    src={colaborator6}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400   overflow-hidden">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <img
                    src={colaborator7}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400   overflow-hidden">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <img
                    src={colaborator8}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="m-4 flex flex-col items-center justify-center pb-4">
        <h4 className="w-full my-10 text-4xl md:text-5xl text-center">
          ¿Te gustaría ser un colaborador?
        </h4>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Quiero ser un colaborador!
        </a>
      </div>
    </section>
  );
}
