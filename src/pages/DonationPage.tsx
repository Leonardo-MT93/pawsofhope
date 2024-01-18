import DonationForm from "@/components/DonationForm";

const DonationPage = () => {
  return (
    <section className="flex items-center flex-col text-dark w-full min-h-screen relative px-4">
      <h2 className="w-full my-10 text-4xl md:text-5xl text-center">
        Realiza tu donación!
      </h2>
      <DonationForm />
    </section>
  );
};

export default DonationPage;
