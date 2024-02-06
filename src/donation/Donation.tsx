// import { useState } from "react";
// import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";

// interface Donation {
//   title: string;
//   amount: number;
// }

// const Donation = ({ title, amount }: Donation) => {
//   const [preferenceId, setPreferenceId] = useState(null);
//   initMercadoPago('TEST-713237b1-e977-43f3-a67d-89bb13564a55', { locale: "es-AR" });

//   const createPreference = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/create-donation",
//         {
//           title: title,
//           quantity: 1,
//           price: amount,
//         }
//       );
//       const { id } = response.data;
//       return id;
//     } catch (error) {
//       console.log("Error en el frontend", error);
//     }
//   };

//   const handleDonation = async() => {
//     const id = await createPreference();
//     if(id){
//         setPreferenceId(id);
//     }
//   }

//   return (
//     <>
//       <Button onClick={handleDonation}>Hacer donación</Button>
//       {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} /> }
      
//     </>
//   );
// };

// export default Donation;
