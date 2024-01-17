
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



  return (
    <div className="w-full sm:w-[400px]  md:w-[300px] h-[600px] flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" w-full sm:w-[400px]  md:w-[300px] h-[240px] overflow-hidden">
        <img
          className="w-full h-full rounded-t-lg object-fill"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full h-[360px] flex flex-col items-center justify-around border border-black">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 underline">
          {name}
        </h5>
        <div className="flex flex-col items-center justify-between h-[200px]">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {status}
          </h4>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Tamaño: {size}
          </h4>
          <h4 className="">
            {characteristics.map((characteristic, index) => (
              <span key={index} className="bg-orange-400 border border-black text-white p-2 mx-1 rounded-3xl font-bold">
                {characteristic}
              </span>
            ))}
          </h4>
          <p className="p-1 h-[60px] my-3 font-normal text-sm text-gray-700 dark:text-gray-400 text-ellipsis text-center">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-evenly ">
        <button
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-md font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          onClick={handleAdoptionClick}
        >
          Quiero Adoptar
        </button>
        <button
          className="bg-blue-400 text-gray-900 hover:bg-yellow-300 py-2 px-4 rounded-full text-md  font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Quiero dar tránsito
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default AdoptionCard;
