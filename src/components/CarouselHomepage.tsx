import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import  photo1  from '../../public/images/456.webp'
const CarouselHomepage = () => {
  return (
    <div className="w-full flex justify-center">
          <Carousel className="max-w-screen-xl">
            <CarouselContent>
            <CarouselItem >
                  <div className="w-full border border-red-100">
                    <Card>
                      <CardContent className="flex h-[30vh] items-center justify-center">
                        <span className="text-4xl font-semibold">
                          <img src={photo1} alt="." className="w-full h-full"/>
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