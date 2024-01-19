import NoticeCard from "@/components/NoticeCard";
import photo2 from "../images/featuredsection1.jpg";
import photo3 from "../images/featuredsection2.jpg";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      photo: photo2,
      title: "¡Gracias por la ayuda!",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      id: 2,
      photo: photo3,
      title: "Año nuevo con nuestros amigos",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      id: 3,
      photo: photo3,
      title: "Noche de festejos y agradecimientos",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      id: 4,
      photo: photo3,
      title: "Visitános en nuestro nuevo stand",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
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
