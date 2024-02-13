import NoticeCard from "./NoticeCard";
import photo1 from "../images/featuredsection1.jpg";
import photo2 from "../images/featuredsection2.jpg";
import photo3 from "../images/featuredsection3.jpg";
const Notices = () => {
  const notices = [
    {
      id: 1,
      photo: photo1,
      title: "¡Estrenamos un nuevo logo!",
      description:
        "A partir de febrero, estrenamos un nuevo logo en nuestras redes sociales. Este logo representa nuestro compromiso con los animales que rescatamos y nos ayudará a ser reconocidos más fácilmente en todas nuestras redes.",
    },
    {
      id: 2,
      photo: photo2,
      title: "Seguimos con nuestra Feria Americana",
      description:
        "Como todos los domingos, seguimos con nuestra feria americana para poder recaudar fondos y cubrir todo lo que nos hace falta para poder seguir ayudando día a día a todos los animalitos que rescatamos. ¡Sean bienvenidos a visitarnos y colaborar con nosotros!",
    },
    {
      id: 3,
      photo: photo3,
      title: "Rescatando a un Coni, una nueva integrante de la familia",
      description:
        "Coni fue rescatada de un arroyo en condiciones horribles. Sus patitas estaban atadas, una de ellas estaba quebrada y estaba totalmente desnutrida. Actualmente se está recuperando y, según el diagnóstico de los veterinarios, le detectaron una falla renal.",
    },
  ];
  return (
    <section className="w-full relative sm:p-16 xs:p-8 px-4 py-4 ">
      <h1 className="mb-[30px] text-4xl md:text-5xl text-center font-bold">Novedades</h1>
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
        <div className=" flex flex-col gap-[30px] ">
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
    </section>
  );
};

export default Notices;
