import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from '../images/logo-responsive.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <div className="flex  flex-wrap place-items-center h-20">
      <section className="relative mx-auto w-full h-20">
        {/* <!-- navbar --> */}
        <nav className="flex justify-between   text-black w-full">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between ">
            <NavLink
              className="text-xl font-bold font-heading flex justify-center items-center"
              to="/"
            >
              <img className="h-9" src={logo} alt="." />
            </NavLink>
            {/* <!-- Nav Links --> */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `nav-item nav-link ${isActive ? "active" : ""}`
                  }
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `nav-item nav-link ${isActive ? "active" : ""}`
                  }
                  to="/biography"
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-gray-200" to="/donations" >
                  Donaciones
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-gray-200" to="/adoption">
                  Adopta!
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-gray-200" to="/store">
                  Tienda
                </NavLink>
              </li>
            </ul>
            <NavLink className="hidden md:flex items-center space-x-5" to='/donations'>
              <Button>Hacer una donación</Button>
            </NavLink>
            <button
            className=" flex-col justify-center items-center md:hidden pr-4"
            onClick={handleClick}
          >
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
          </div>
          {/* <!-- Responsive navbar --> */}
          {isOpen && (
            <div className="min-w-[70vw] min-h-max flex flex-col justify-between z-30 items-center fixed top-96 left-1/2  transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-custom-color shadow-custom-shadow backdrop-blur-custom-blur border border-custom-border py-32"
            >
              <nav className="flex items-center flex-col justify-center">
                <ul className="flex flex-col items-center space-y-4">
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/"
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/biography"
                    >
                      Nosotros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/bio"
                    >
                      Adopta!
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/"
                    >
                      Tienda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/"
                    >
                      Nuestras redes
                    </NavLink>
                  </li>
                </ul>
                <div className="flex items-center">
                  <Button className=" mt-4 bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                    Iniciar Sesion
                  </Button>
                </div>
              </nav>
            </div>
          )}

          
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
