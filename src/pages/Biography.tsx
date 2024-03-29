import NoticeCard from "@/components/NoticeCard";
import photo1 from "../img/biografia1.avif";
import photo2 from "../img/biografia2.avif";
import photo3 from "../img/biografia3.avif";
import { Link } from "react-router-dom";

const Biography = () => {
  const notices = [
    {
      id: 2,
      photo: photo1,
      title: "Nuestra familia",
      description:
        "Nuestra familia está compuesta por Rosana, Micaela, Sabrina, Luján, Mariangeles, Miguela y Lorena. Nos unimos con el propósito de ayudar a los animales de la calle. Nos encargamos de rescatar, cuidar, alimentar, conseguir tránsito y dar en adopción a los animales necesitados.",
    },
    {
      id: 3,
      photo: photo2,
      title: "¿Cómo ayudamos?",
      description:
        "Rescatamos a todos los animales en peligro, abandonados o en situación de calle. Los llevamos a veterinarios para revisión y tratamiento. Este compromiso es diario, atendiendo urgencias de perros, gatos, aves, caballos y más. Todos merecen una oportunidad de ser felices, y estamos aquí para ayudarlos a encontrarla.",
    },
    {
      id: 4,
      photo: photo3,
      title: "¿Cómo nos organizamos?",
      description:
        "Tenemos un grupo de rescate, otro de tránsito, otro de adopciones y otro de voluntarios. Actualmente, no contamos con ayuda de ninguna entidad, por lo que nos financiamos con donaciones, rifas sale o sale, nuestra feria americana y las colaboraciones de los vecinos de Ezeiza. Sin embargo, a veces no es suficiente para saldar las deudas con los veterinarios o cubrir los alimentos de los animales, por lo que la contribución de todos es crucial. ¡Toda ayuda es bienvenida!",
    },
  ];

  return (
    <section className="flex items-center flex-col w-full min-h-screen relative px-4">
      <h1 className="w-full my-10 text-4xl md:text-5xl text-center font-bold">
        ¿Quiénes somos?
      </h1>
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col ">
        <div className=" flex flex-col gap-4">
          {notices.map((item) => (
            <NoticeCard
              description={item.description}
              notice={item.title}
              photo={item.photo}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className="m-4 flex flex-col items-center justify-center pb-4">
        <h2 className="m-10 text-4xl md:text-5xl text-center font-bold">
          ¿Te gustaría formar parte?
        </h2>
        <Link
          to="https://api.whatsapp.com/send?phone=+5401130045955&text=Hola,%20me%20gustaria%20formar%20parte%20de%20PorEllosEzeiza.%20%F0%9F%92%99"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          target="_blank" rel="noopener noreferrer"
        >
          Quiero ser parte!
        </Link>
      </div>
    </section>
  );
};

export default Biography;
