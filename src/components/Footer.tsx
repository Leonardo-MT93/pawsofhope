import { Link } from "react-router-dom"
// import Layout from "./Layout"
const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium lg:text-lg sm:text-base '>
        <div className="w-full flex flex-col items-center justify-center py-10 md:flex-row md:justify-evenly">
            <span>{new Date().getFullYear()} &copy; Todos los derechos reservados</span>
            <div className='flex items-center'>
            Desarrollado con <span className='text-2xl px-1'>&#9825;</span>
            por&nbsp;<Link to="/" className='underline  underline-offset-2'>LeoTolaba</Link>
            
            </div>
            <Link className='hover:underline  underline-offset-2' to="https://api.whatsapp.com/send?phone=+5401123937902&text=Hola,%20Me%20encanto%20tu%20portfolio!%20Queria%20contactarte!%20%F0%9F%92%99" target={"_blank"}>Whatsapp</Link>
        </div>
    </footer>
  )
}

export default Footer