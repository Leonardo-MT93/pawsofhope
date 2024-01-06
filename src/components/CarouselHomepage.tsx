import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import  carousel1  from '../images/carouselimage1.jpg'
import  carousel2  from '../images/carouselimage2.jpg'
import  carousel3  from '../images/carouselimage3.jpg'

const CarouselHomepage = () => {
  return (
    <div className="w-full flex justify-center">
          <Carousel className="max-w-screen-xl">
            <CarouselContent>
            <CarouselItem >
                  <div className="w-full border border-red-100">
                    <Card>
                      <CardContent className="flex md:h-[75vh] items-center justify-center">
                        <span className="text-4xl font-semibold">
                          <img src={carousel1} alt="." className="w-full h-full"/>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem >
                  <div className="w-full border border-red-100">
                    <Card>
                      <CardContent className="flex md:h-[75vh] items-center justify-center">
                        <span className="text-4xl font-semibold">
                          <img src={carousel2} alt="." className="w-full h-full"/>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem >
                  <div className="w-full border border-red-100">
                    <Card>
                      <CardContent className="flex md:h-[75vh] items-center justify-center">
                        <span className="text-4xl font-semibold">
                          <img src={carousel3} alt="." className="w-full h-full"/>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
  )
}

export default CarouselHomepage