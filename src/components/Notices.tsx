import NoticeCard from "./NoticeCard";
import photo1 from "../images/featuredsection1.jpg";
import photo2 from "../images/featuredsection2.jpg";
import photo3 from "../images/featuredsection3.jpg";
const Notices = () => {
  const notices = [
    {
      id: 1,
      photo: photo1,
      title: "¡Nuevos gatitos en adopción!",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      id: 2,
      photo: photo2,
      title: "Cachorrito en busca de una familia",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      id: 3,
      photo: photo3,
      title: "Sigue la recuperación de Roco",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
  ];
  return (
    <section className="w-full relative sm:p-16 xs:p-8 px-4 py-4 border border-green-500">
      <h2 className="mb-[30px] text-4xl md:text-5xl text-center">Noticias</h2>
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col ">
        <div className=" flex flex-col gap-[30px]">
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
