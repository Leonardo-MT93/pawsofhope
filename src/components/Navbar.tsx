import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div>
      <div className="flex  flex-wrap place-items-center h-20">
        <section className="relative mx-auto w-full ">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between h-20  text-black w-full">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-xl font-bold font-heading flex justify-center items-center" href="#">
                {/* <img className="h-9" src="logo.png" alt="." /> */}
                Patitas de Esperanza
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Adopta!
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Tienda
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Nuestras redes
                  </a>
                </li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5">
                <Button>Iniciar Sesion</Button>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
