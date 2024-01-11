import NoticeCard from "./NoticeCard";
const Notices = () => {
  return (
    <section className="w-full relative sm:p-16 xs:p-8 px-4 py-4 border border-green-500">
      <h2 className="mb-[20px] text-3xl text-center">Noticias</h2>
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col ">
        <div className=" flex flex-col gap-[30px]">
          <NoticeCard />
        </div>
      </div>
    </section>
  );
};

export default Notices;
