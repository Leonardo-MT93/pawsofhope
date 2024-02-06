import { Address } from "@/constants/FoundationsAddresses";
import { Link } from "react-router-dom";

const AddressCard = ({name, address, schedule, link, contact, map}: Address) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-around border rounded-xl border-pink-500 my-4 p-2">
      <div className="flex flex-col items-center justify-center w-full h-full md:w-[50%] md:h-[300px] xl:h-[400px] ">
        <h2 className="text-lg sm:text-3xl text-balance border border-b-black">
          {name}
        </h2>
        <h3 className="text-sm sm:text-2xl text-pretty">
          {address}
        </h3>
        <h3 className="text-sm sm:text-2xl text-pretty">
          {schedule}
        </h3>
        <h3 className="text-sm sm:text-2xl text-pretty">
          Contacto: <Link to="www.google.com">{contact}</Link>
        </h3>
        <Link
          className="text-xl hover hover:text-pink-400"
          to={link}
        >
          Ver ubicación
        </Link>
      </div>
      <div className="w-full md:w-[40%] md:h-[300px] xl:h-[390px]">
        <iframe
          src={map}
          width="100%"
          height="100%"
          className="hidden invisible border:0; md:visible md:block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AddressCard;
