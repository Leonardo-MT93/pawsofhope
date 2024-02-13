import DonationForm from "@/components/DonationForm";

const DonationPage = () => {
  return (
    <section className="flex items-center flex-col text-dark w-full min-h-screen relative px-4">
      <h1 className="w-full my-10 text-4xl md:text-5xl text-center font-bold">
        Realiza tu donación!
      </h1>
      <DonationForm />
    </section>
  );
};

export default DonationPage;
