import { foundationsAdresses } from "@/constants/FoundationsAddresses";
import AddressCard from "@/components/AddressCard";

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center w-full h-full px-2 sm:px-6">
      <h2 className="my-10 text-4xl md:text-5xl text-center">
        Lista de Refugios
      </h2>
      <section className="w-full h-full md:w-[95%] xl:w-[85%] relative flex flex-col items-center justify-center">
        {foundationsAdresses.map((address) => (
            <AddressCard
              key={address.id}
              id={address.id}
              name={address.name}
              address={address.address}
              schedule={address.schedule}
              link={address.link}
              contact={address.contact}
              map={address.map}
            />
        ))}
        
      </section>
    </section>
  );
};

export default ContactPage;
