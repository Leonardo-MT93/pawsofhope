import CarouselHomepage from "@/components/CarouselHomepage";
import { Collaborators } from "@/components/Collaborators";
// import FeaturedContent from "@/components/FeaturedContent";
import Notices from "@/components/Notices";

const Home = () => {
  return (
    <>
      <head>
        <title>Pawns of Hope</title>
        <meta name="description" content="Homepage de Paws of Hope. Proyecto cuyo fin es el de ayudar a los distintos refugios que ayudan a los animales abandonados." />
        <meta name="author" content="Leonardo Manuel Tolaba"/>
      </head>
      <main className="flex items-center flex-col text-dark w-full min-h-screen">
        <CarouselHomepage/>
        <Notices/>
        <Collaborators/>
      </main>
    </>
  );
};

export default Home;
