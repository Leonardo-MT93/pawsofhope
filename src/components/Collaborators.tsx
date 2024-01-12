import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import brand1 from '../images/brands1.jpeg'
import brand2 from '../images/brands2.jpeg'
import brand3 from '../images/brands3.png'
import { Link } from "react-router-dom";

export function Collaborators() {

  return (
    <section className="w-full relative z-10 sm:p-16 xs:p-8 px-6 py-12"> 
          <h2 className="mb-[20px] text-4xl md:text-5xl text-center">Colaboradores</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
        <CarouselItem
              className="pl-1 sm:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1 flex justify-center">
                <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                  <CardContent className="p-0 flex items-center justify-center  h-auto ">
                    <Link to='https://www.google.com'>
                    <img src={brand1} alt='something' className=" w-full filter grayscale object-contain"/>
                    </Link>
                  </CardContent>
                </Card>
              </div>
        </CarouselItem>
        <CarouselItem
              className="pl-1 sm:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1 flex justify-center">
                <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                  <CardContent className="p-0 flex items-center justify-center  h-auto ">
                    <img src={brand2} alt='something' className=" w-full filter grayscale object-contain"/>
                  </CardContent>
                </Card>
              </div>
        </CarouselItem>
        <CarouselItem
              className="pl-1 sm:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1 flex justify-center">
                <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                  <CardContent className="p-0 flex items-center justify-center  h-auto ">
                    <img src={brand1} alt='something' className=" w-full filter grayscale object-contain"/>
                  </CardContent>
                </Card>
              </div>
        </CarouselItem>
        <CarouselItem
              className="pl-1 sm:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1 flex justify-center">
                <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                  <CardContent className="p-0 flex items-center justify-center  h-auto ">
                    <img src={brand3} alt='something' className=" w-full filter grayscale object-contain"/>
                  </CardContent>
                </Card>
              </div>
        </CarouselItem>
        <CarouselItem
              className="pl-1 sm:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1 flex justify-center">
                <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden ">
                  <CardContent className="p-0 flex items-center justify-center  h-auto ">
                    <img src={brand1} alt='something' className=" w-full filter grayscale object-contain"/>
                  </CardContent>
                </Card>
              </div>
        </CarouselItem>
        <CarouselItem
              className="pl-1 sm:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1 flex justify-center">
                <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400 overflow-hidden  ">
                  <CardContent className="p-0 flex items-center justify-center  h-auto ">
                    <img src={brand2} alt='something' className=" w-full filter grayscale object-contain"/>
                  </CardContent>
                </Card>
              </div>
        </CarouselItem>
        <CarouselItem
              className="pl-1 sm:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1 flex justify-center">
                <Card className="w-[90%] rounded-2xl hover:border hover:border-gray-400   overflow-hidden">
                  <CardContent className="p-0 flex items-center justify-center  h-auto ">
                    <img src={brand3} alt='something' className=" w-full filter grayscale object-contain"/>
                  </CardContent>
                </Card>
              </div>
        </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
