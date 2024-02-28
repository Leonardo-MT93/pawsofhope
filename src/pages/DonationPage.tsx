import DonationForm from "@/components/DonationForm";
import { Link, NavLink } from "react-router-dom";

const DonationPage = () => {
  return (
    <section className="flex items-center flex-col text-dark w-full min-h-screen relative px-4">
      <h1 className="w-full my-10 text-4xl md:text-5xl text-center font-bold">
        Realiza tu donación!
      </h1>
      <h2 className="w-full text-3xl md:text-4xl text-center underline">
        Donación por CVU
      </h2>
      <p className="mt-[4px] md:mt-[16px] font-normal italic lg:text-[20px] text-[14px] mb-6 text-gray-900 text-center ">
        Para realizar una donación por CVU, podés solicitarlo por Whatsapp
        haciendo click en el siguiente botón:
      </p>
      <Link
        to="https://api.whatsapp.com/send?phone=+5401130045955&text=Hola,%20me%20gustaria%20hacer%20una%20donacion%20a%20PorEllosEzeiza.%20%F0%9F%92%99"
        className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quiero donar por CVU
      </Link>
      <div className="w-[40%] flex border border-t-black my-6"/>
      <h2 className="w-full text-3xl md:text-4xl text-center underline">
        Donación con MercadoPago
      </h2>
      <DonationForm />
      <div className="w-[40%] flex border border-t-black my-6"/>
      <div className="w-full flex flex-col items-center mb-8">
        <h2 className="w-full text-3xl md:text-4xl text-center underline ">
          Donación presencial
        </h2>
        <p className="mt-[4px] md:mt-[16px] font-normal italic lg:text-[20px] text-[14px] mb-6 text-gray-900 text-center ">
          Podes realizar tu donación personalmente y tambien conocernos en
          nuestra feria americana o en nuestros hogares de paso.
        </p>
        <NavLink
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          to="/contact"
        >
          ¿Dónde estamos?
        </NavLink>
      </div>
    </section>
  );
};

export default DonationPage;
