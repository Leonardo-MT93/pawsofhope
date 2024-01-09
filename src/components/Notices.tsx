import NoticeCard from "./NoticeCard";
const Notices = () => {
  return (
    <section className="w-full relative z-10 sm:p-16 xs:p-8 px-6 py-12">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col ">
        <h2 className="text-center">Notices</h2>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {/* <InsightCard key={`insight-${index}`} {...insight} /> */}
          <NoticeCard />
        </div>
      </div>
    </section>
  );
};

export default Notices;
