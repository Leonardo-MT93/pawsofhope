import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";

interface Errors {
  name?: string;
  donation?: string;
  user_message?: string;
}

interface Valores {
  name: string;
  donation: number;
}

const DonationForm = () => {
  const [formEnviado, setFormEnviado] = useState(false);
  const form = useRef(null);
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago('TEST-713237b1-e977-43f3-a67d-89bb13564a55', { locale: "es-AR" });

  const createPreference = async (valores:Valores) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-donation",
        {
          title: valores.name,
          quantity: 1,
          price: valores.donation,
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log("Error en el frontend", error);
    }
  };



  return (
    <>
      <Formik
        initialValues={{
          name: "",
          donation: 0,
          user_message: "",
        }}
        validate={(valores)=>{
          const errores: Errors = {};
          if(!valores.name){
            errores.name = 'Ingrese un nombre. Mín 3 caract.';
          }else if(!/^[a-zA-Z ]+$/.test(valores.name)){
            errores.name = 'Sólo inserte letras y espacios';
          }
          if(!valores.donation){
            errores.donation = 'Ingrese un monto válido';
          }else if (isNaN(valores.donation) || Number(valores.donation) <= 1) {
            errores.donation = 'La donación debe ser un mayor a $1';
          }
          if(!valores.user_message){
            errores.user_message = 'Ingrese un mensaje.';
          }else if((valores.user_message).length < 6){
            errores.user_message = 'Mensaje muy corto. Caracteres mínimos: 6';
          }
          return errores;
        }}
        onSubmit={async(valores, { resetForm }) => {
          resetForm();
          console.log(valores)
          setFormEnviado(true);
          const id = await createPreference(valores);
        if(id){
        setPreferenceId(id);
    } 
          setTimeout(() => {
            setFormEnviado(false);
          }, 3000);
        }}
      >
        {({ values, handleBlur }) => (
          <div className="w-full flex flex-col justify-center items-center min-h-[70vh] px-6 ">
            <Form className="flex w-full flex-col items-center min-h-screen sm:w-[80%] xl:w-[50%] sm:pt-3 " ref={form} >
              <div className=" flex w-full flex-col md:w-[85%] ">
                <label
                  className="w-full flex justify-start text-lg md:text-2xl "
                  htmlFor="name"
                >
                  Nombre y apellido
                </label>
                <Field
                  type="text"
                  className="w-full flex h-10 md:h-14 md:text-xl border rounded-2xl px-5 border-black  "
                  id="name"
                  name="name"
                  placeholder="Inserte su nombre"
                  value={values.name}
                  onBlur={handleBlur}
                />
                <div className="w-full h-7">
                  <ErrorMessage
                    className="flex justify-start text-red-600 text-sm md:text-xl"
                    name="name"
                    component="div"
                  ></ErrorMessage>
                </div>
              </div>
              <div className="flex w-full flex-col md:w-[85%] ">
                <label
                  className="w-full flex justify-start text-lg md:text-2xl"
                  htmlFor="tittle"
                >
                  Monto a donar
                </label>
                <Field

                  type="number"
                  min='0'
                  className="w-full flex h-10 md:h-14 md:text-xl border rounded-2xl px-5 border-black "
                  id="tittle"
                  name="donation"
                  placeholder="Por ejemplo AR$ 100"
                  value={values.donation}
                  onBlur={handleBlur}
                />
                <div className="w-full h-7">
                  <ErrorMessage
                    className="flex justify-start text-red-600 text-sm md:text-xl"
                    name="donation"
                    component="div"
                  ></ErrorMessage>
                </div>
              </div>
              <div className="flex w-full flex-col md:w-[85%]">
                <label
                  className="w-full flex justify-start text-lg md:text-2xl"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <Field
                  className="w-full flex h-25 md:h-25 md:text-xl border rounded-2xl px-5 pt-2 border-black "
                  as="textarea"
                  id="message"
                  rows="3"
                  placeholder="Escriba su mensaje aquí"
                  name="user_message"
                  value={values.user_message}
                  onBlur={handleBlur}
                />
                <div className="w-full h-7">
                  <ErrorMessage
                    className="flex justify-start text-red-600 text-sm md:text-xl"
                    name="user_message"
                    component="div"
                  ></ErrorMessage>
                </div>
              </div>
              <div className="flex items-center justify-center mt-2 lg:self-center">
              <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black" size={"lg"}>
                Realizar donación
              </Button>
              {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} /> }
              </div>
              {formEnviado && (
                <p className="flex justify-start text-green-500 font-bold text-sm pt-4">
                  Donación realizada con éxito!
                </p>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default DonationForm;
