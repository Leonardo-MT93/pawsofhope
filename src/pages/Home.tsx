import CarouselHomepage from "@/components/CarouselHomepage";
import { Collaborators } from "@/components/Collaborators";
import Notices from "@/components/Notices";

const Home = () => {
  return (
    <>
      <main className="flex items-center flex-col text-dark w-full min-h-screen">
        <CarouselHomepage/>
        <Notices/>
        <Collaborators/>
      </main>
    </>
  );
};

export default Home;
