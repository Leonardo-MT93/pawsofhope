import DonationForm from "@/components/DonationForm"

const DonationPage = () => {
  return (
    <>
    <main className="flex items-center flex-col text-dark w-full min-h-screen border border-red-600">
        <DonationForm/>
    </main>
  </>
  )
}

export default DonationPage