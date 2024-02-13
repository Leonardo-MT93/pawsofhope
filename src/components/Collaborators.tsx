import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import colaborator0 from "../img/colaborator0.avif";
import colaborator1 from "../img/colaborator1.avif";
import colaborator2 from "../img/colaborator2.avif";
import colaborator3 from "../img/colaborator3.avif";
import colaborator4 from "../img/colaborator4.avif";
import colaborator5 from "../img/colaborator5.avif";
import colaborator6 from "../img/colaborator6.avif";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

export function Collaborators() {
  return (
    <section className="w-full relative px-4">
      <h1 className="w-full my-10 text-4xl md:text-5xl text-center font-bold">
        Colaboradores
      </h1>
      <Carousel className="w-full "  plugins={[Autoplay({ delay: 4000 })]}>
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <Link to="https://www.instagram.com/veterinariatristansuarez/" target="_blank" rel="noopener noreferrer">
                    <img
                      src={colaborator0}
                      alt="something"
                      className=" w-full filter grayscale object-contain"
                      loading="lazy"
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
                <Link to="https://www.instagram.com/forrajeriabeethoven/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={colaborator1}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                    loading="lazy"
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
                <Link target="_blank" rel="noopener noreferrer" to="https://www.google.com/maps/place/El+Trebol/@-34.8562994,-58.5021842,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd6d15768c953:0x5939f70de5800cbf!8m2!3d-34.8562994!4d-58.5021842!16s%2Fg%2F11b7q9kp2f?hl=es&entry=ttu">
                <img
                    src={colaborator2}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                    loading="lazy"
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
                <Link to="https://www.instagram.com/brezza_petshop/" target="_blank" rel="noopener noreferrer">
                <img
                    src={colaborator3}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                    loading="lazy"
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
                  <Link to="https://rodillospaintroller.com.ar/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={colaborator4}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                    loading="lazy"
                  />
                  </Link>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 sm:basis-1/3 lg:basis-1/6">
            <div className="p-1 flex justify-center">
              <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden  ">
                <CardContent className="p-0 flex items-center justify-center  h-auto ">
                  <Link to="https://api.whatsapp.com/send?phone=+5401123937902&text=Hola,%20te%20contacto%20desde!%20PorEllosEzeiza%20.%20%F0%9F%92%99" target="_blank" rel="noopener noreferrer">
                  <img
                    src={colaborator5}
                    alt="something"
                    className=" w-full filter grayscale object-contain"
                    loading="lazy"
                  />
                  </Link>
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
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="m-4 flex flex-col items-center justify-center pb-4">
        <h2 className="w-full my-10 text-4xl md:text-5xl text-center font-bold">
          ¿Te gustaría ser un colaborador?
        </h2>
        <Link
          to="https://api.whatsapp.com/send?phone=+5401130045955&text=Hola,%20me%20gustaria%20ser%20un%20colaborador%20de%20PorEllosEzeiza.%20%F0%9F%92%99"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Quiero ser un colaborador!
        </Link>
      </div>
    </section>
  );
}
