import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface AdoptionCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  size: string;
  status: string;
  characteristics: string[];
}

const AdoptionCard = ({
  id,
  name,
  image,
  description,
  size,
  status,
  characteristics,
}: AdoptionCardProps) => {

  const handleAdoptionClick = () => {
    console.log("Animal adoptado: " + id);
  };

  const handleTransitClick = () => {
    console.log("Animal adoptado: " + id);
  };



  return (
    <div className="w-full sm:w-[400px]  md:w-[300px] xl:w-[400px] h-[600px] flex flex-col items-center justify-between bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" w-full sm:w-[400px]  md:w-[300px] xl:w-[400px] h-[240px] overflow-hidden">
        <img
          className="w-full h-full rounded-t-lg object-fill"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full h-[360px] flex flex-col items-center justify-around">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 underline">
          {name}
        </h5>
        <div className="flex flex-col items-center justify-between h-[200px]">
          <Badge className={`mx-1 text-white ${status == 'VACUNADO' ? 'bg-green-300' : 'bg-red-300'}`} variant={"outline"}>{status}</Badge>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Tamaño: {size}
          </h4>
          <h4 className="">
            {characteristics.map((characteristic, index) => (
              <Badge key={index} className="bg-orange-300 mx-1 text-white"  variant={"outline"}>{characteristic.toLocaleUpperCase()}</Badge>
            ))}
          </h4>
          <p className="p-1 h-[60px] my-3 font-normal text-sm text-gray-700 dark:text-gray-400 text-ellipsis text-center">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-evenly ">
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black "onClick={handleAdoptionClick}>
        Quiero Adoptar
        </Button>
        <Button className="bg-blue-400 hover:bg-blue-500 text-black" onClick={handleTransitClick}>
        Quiero dar tránsito
        </Button>
        </div>
        
      </div>
    </div>
  );
};

export default AdoptionCard;
