import CarouselHomepage from "@/components/CarouselHomepage";
import FeaturedContent from "@/components/FeaturedContent";
import Notices from "@/components/Notices";

const Home = () => {
  return (
    <>
      {/* <head>
        <title>Pawns of Hope</title>
        <meta name="description" content="Homepage de Paws of Hope. Proyecto cuyo fin es el de ayudar a los distintos refugios que ayudan a los animales abandonados." />
        <meta name="author" content="Leonardo Manuel Tolaba"/>
      </head> */}
      <main className="flex items-center flex-col text-dark w-full min-h-screen border border-red-500">
        <CarouselHomepage/>
        {/* <FeaturedContent/> */}
        <Notices/>
      </main>
    </>
  );
};

export default Home;
