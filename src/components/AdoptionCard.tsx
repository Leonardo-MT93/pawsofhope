import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface AdoptionCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  characteristics: string[];
}

const AdoptionCard = ({
  id,
  name,
  image,
  description,
  characteristics,
}: AdoptionCardProps) => {
  return (
    <div className="w-full sm:w-[400px]  md:w-[350px] xl:w-[400px] h-[500px] flex flex-col relative  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt={`${name} animal en adopcion`}
        src={image}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25  h-[500px] pt-64">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-center">
            {characteristics.map((characteristic, index) => (
              <Badge
                key={index}
                className="bg-orange-500 mx-1 text-white font-extralight"
                variant={"outline"}
              >
                {characteristic.toLocaleUpperCase()}
              </Badge>
            ))}
          </div>
          <h2 className="mt-0.5 text-3xl text-white">{name}</h2>

          <p className="h-[70px] my-2 line-clamp-3 text-sm/relaxed text-white">
            {description}
          </p>
          <div className="w-full flex justify-evenly ">
            <Link
              to={`https://api.whatsapp.com/send?phone=+5401130045955&text=Hola,%20te%20contacto%20por%20${name}%20-%20${id}%20desde%20PorEllosEzeiza%20.%20Me%20gustaría%20adoptar%20%F0%9F%92%99`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-200 hover:bg-yellow-500 text-black ">
                Quiero Adoptar
              </Button>
            </Link>

            <Link
              to={`https://api.whatsapp.com/send?phone=+5401130045955&text=Hola,%20te%20contacto%20por%20${name}%20-%20${id}%20desde%20PorEllosEzeiza%20.%20Me%20gustaría%20brindar%20tránsito%20%F0%9F%92%99`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-200 hover:bg-blue-500 text-black">
                Quiero dar tránsito
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionCard;
