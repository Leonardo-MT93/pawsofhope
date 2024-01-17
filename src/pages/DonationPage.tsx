import DonationForm from "@/components/DonationForm"

const DonationPage = () => {
  return (
    <>
    <main className="flex items-center flex-col text-dark w-full min-h-screen border border-red-600">
    <section className="w-full relative sm:p-16 xs:p-8 px-4 py-4">
        <h2 className="mb-[30px] text-4xl md:text-5xl text-center">
          Realiza tu donación! 
        </h2>
        <DonationForm/>
      </section>



        
    </main>
  </>
  )
}

export default DonationPage