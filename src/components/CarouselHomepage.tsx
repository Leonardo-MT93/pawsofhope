import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import carousel1 from "../images/carouselimage1.jpg";
import carousel2 from "../images/carouselimage2.jpg";
import carousel3 from "../images/carouselimage3.jpg";

const CarouselHomepage = () => {
  return (
    <div className="w-full flex justify-center p-2 md_p-0 md:mt-4">
      <Carousel 
       className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="w-full  flex items-center justify-center">
              <Card className="flex md:w-[80%] md:h-[75vh] rounded-sm md:rounded-xl overflow-hidden">
                <CardContent className="w-full px-0 py-0  overflow-hidden">
                  <img
                    src={carousel1}
                    alt="."
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full  flex items-center justify-center">
              <Card className="flex md:w-[80%] md:h-[75vh] rounded-sm md:rounded-xl overflow-hidden">
                <CardContent className="w-full px-0 py-0  overflow-hidden">
                  <img
                    src={carousel2}
                    alt="."
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full  flex items-center justify-center">
              <Card className="flex md:w-[80%] md:h-[75vh] rounded-sm md:rounded-xl overflow-hidden">
                <CardContent className="w-full px-0 py-0  overflow-hidden">
                  <img
                    src={carousel3}
                    alt="."
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselHomepage;
