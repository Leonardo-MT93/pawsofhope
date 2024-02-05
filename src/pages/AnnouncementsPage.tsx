import NoticeCard from "@/components/NoticeCard";
import photo1 from "../images/notices1.jpg";
import photo2 from "../images/notices2.jpg";
import photo3 from "../images/notices3.jpg";
import photo4 from "../images/notices4.jpg";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      photo: photo1,
      title: "¡Comenzamos el año con todo!",
      description:
        "Gracias nuevamente a todos los que nos ayudan a seguir adelante. Estamos felices de mostrarles nuestra página web con su nuevo logo. ¡Esperamos que les guste! ¡Síguenos en nuestras redes! ¡Juntos podemos hacer la diferencia!",
    },
    {
      id: 2,
      photo: photo2,
      title: "El clásico de los domingos: ¡Feria americana!",
      description:
        "Seguimos como siempre con nuestra feria americana, todos los domingos de 10 a 18hs. Si querés pasar un día con nosotros, conocernos o simplemente tomar unos mates te esperamos! Trae tu donación, tu compra o simplemente vení a chusmear. ¡Te esperamos!",
    },
    {
      id: 3,
      photo: photo3,
      title: "Dias calurosos y ellos necesitan refrescarse",
      description:
        "Como ustedes saben, el verano es una de las estaciones más difíciles para los animales de la calle. Por eso, estamos pendientes de ellos, llevándoles agua, comida y refugio. Si quieres ayudar, no dudes en contactarnos. ¡Toda ayuda es bienvenida!",
    },
    {
      id: 4,
      photo: photo4,
      title: "Nueva gatita rescatada y en adopción",
      description:
        "Hembrita rescatada en búsqueda de un hogar. Tiene aproximadamente 2 meses, es muy cariñosa y juguetona. Estamos comprometidos con su castración a los 6 meses y podemos acercarla a tu domicilio, no dudes en contactarnos. ¡Ella te está esperando!",
    },
  ];

  return (
    <section className="flex items-center flex-col w-full min-h-screen relative px-4">
      <h2 className="w-full my-10 text-4xl md:text-5xl text-center">
        Novedades y noticias
      </h2>
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col ">
        <div className=" flex flex-col gap-4">
          {announcements.map((item) => (
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

export default Announcements;
