import NoticeCard from "@/components/NoticeCard";
import photo2 from "../images/featuredsection1.jpg";
import photo3 from "../images/featuredsection2.jpg";

const Biography = () => {
  const notices = [
    {
      id: 2,
      photo: photo2,
      title: "Nuestra familia",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      id: 3,
      photo: photo3,
      title: "¿Cómo ayudamos?",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      id: 4,
      photo: photo3,
      title: "¿Cómo nos organizamos?",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
  ];

  return (
    <main className="flex items-center flex-col text-dark w-full min-h-screen">
      <section className="w-full relative sm:p-16 xs:p-8 px-4 py-4">
        <h2 className="mb-[30px] text-4xl md:text-5xl text-center">
          ¿Quienes somos?
        </h2>
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
        <div className="m-4 flex flex-col items-center justify-center">
          <h4 className="text-center font-normal lg:text-[42px] text-[26px]">
            ¿Te gustaría formar parte?
          </h4>
          <a
            href="#"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Quiero ser parte!
          </a>
        </div>
      </section>
    </main>
  );
};

export default Biography;
