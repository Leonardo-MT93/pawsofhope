import { NavLink } from "react-router-dom";

interface AdoptionCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const AdoptionCard = ({ id, name, image, description }: AdoptionCardProps) => {
  return (
    <div className="w-full sm:w-[400px]  md:w-[300px] h-[450px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" w-full sm:w-[400px]  md:w-[300px] h-[240px] overflow-hidden">
        <img className="w-full h-full rounded-t-lg object-fill" src={image} alt="" />
      </div>
      <div className="p-5 flex flex-col items-center justify-center">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className=" h-[60px] mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 text-ellipsis ">
          {description}
        </p>
        <NavLink
            to={`/adoption/${id}`}
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Ver más
        </NavLink>
      </div>
    </div>
  );
};

export default AdoptionCard;
