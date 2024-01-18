import { getAnimalById } from "@/helpers/getAnimalById";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

const AdoptionAnimalPage = () => {
  const { id } = useParams();
  const animal = useMemo(() => getAnimalById(id || ""), [id]);

  if (!animal) {
    return <Navigate to="/adoption" />;
  }

  return (
    <>
      <main className="w-full min-h-screen">
        <section className="w-full min-h-screen relative sm:p-16 xs:p-8 px-4 py-4">
          <h2 className="mb-[30px] text-4xl md:text-5xl text-center">
            Animales en adopción
          </h2>
          <div className="w-full h-[500px] flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ">
              <div className=" w-[400px] h-[400px] overflow-hidden">
                <img
                  className="w-full h-full rounded-t-lg object-fill"
                  src={animal.image}
                  alt=""
                />
              </div>
              <div className="w-[600px] h-[400px] p-5 flex flex-col justify-around">
                <h3 className="text-center mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
                  {animal.name}
                </h3>
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {animal.status}
                </h4>
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  t
                </h4>
                <h4 className="">
                  {animal.characteristics.map((characteristic) => (
                    <span className="bg-orange-400 border border-black text-white p-2 mx-1 rounded-3xl font-bold">{characteristic}</span>
                    ))}
                </h4>
                <p className=" h-[60px] mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 text-ellipsis ">
                  {animal.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdoptionAnimalPage;
