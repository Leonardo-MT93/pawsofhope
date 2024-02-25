import { Link } from "react-router-dom";
import logo1 from "../img/facebook.png";
import logo2 from "../img/instagram.png";
import logo3 from "../img/whatsapp.png";
import logo4 from "../img/tiktok.png";

const Footer = () => {
  return (
    <footer
      className="w-full border-t border-opacity-20 border-black
    font-medium lg:text-lg sm:text-base "
    >
      <div className="w-full flex flex-col items-center justify-around py-10 px-4 md:flex-row  border border-t-black">
        <h2 className="text-pretty text-xl sm:text-3xl">Seguinos en nuestras redes: </h2>
        <div className=" w-full sm:w-[70%] md:w-[40%] flex items-center justify-around  pt-8 md:pt-0 ">
          <Link className="w-[64px] px-1 h-[50%] md:mx-4 " to="https://www.facebook.com/porellosezeiza" target="_blank" rel="noopener noreferrer">
            <img src={logo1} alt="Logo de Facebook" className="w-auto h-auto" loading="lazy" />
          </Link>
          <Link className="w-[64px] px-1 h-[50%] md:mx-4 " to="https://www.instagram.com/porellosezeiza/" target="_blank" rel="noopener noreferrer">
            <img src={logo2} alt="Logo de Instagram" className="w-auto h-auto" loading="lazy" />
          </Link>
          <Link className="w-[64px] px-1 h-[50%] md:mx-4 " to="https://api.whatsapp.com/send?phone=+5401130045955&text=Hola,%20me%20gustaria%20formar%20parte%20de%20PorEllosEzeiza.%20%F0%9F%92%99" target="_blank" rel="noopener noreferrer">
            <img src={logo3} alt="Logo de Whatsapp" className="w-auto h-auto" loading="lazy" />
          </Link>
          <Link className="w-[64px] px-1 h-[50%] md:mx-4 " to="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <img src={logo4} alt="Logo de TikTok" className="w-auto h-auto" loading="lazy" />
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 md:flex-row md:justify-evenly ">
        <span>
          {new Date().getFullYear()} &copy; Todos los derechos reservados
        </span>
        <div className="flex items-center">
          Desarrollado con <span className="text-2xl px-1">&#9825;</span>
          por&nbsp;
          <Link to="/" className="underline  underline-offset-2">
            LeoTolaba
          </Link>
        </div>
        <Link
          className="hover:underline  underline-offset-2"
          to="https://api.whatsapp.com/send?phone=+5401123937902&text=Hola,%20Me%20encanto%20tu%20portfolio!%20Queria%20contactarte!%20%F0%9F%92%99"
          target={"_blank"}
        >
          Whatsapp
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

{
  /*  */
}
