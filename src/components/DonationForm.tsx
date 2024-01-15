import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

const DonationForm = () => {
  const [formEnviado, setFormEnviado] = useState(false);
  const form = useRef(null);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          donation: 0.00,
          user_message: "",
        }}
        validate={(valores)=>{
            let errores: any = {};
            if(!valores.name){
                errores.name = 'Ingrese un nombre. Mín 3 caract.';
            }else if(!/[a-zA-Z][a-zA-Z ]/.test(valores.name)){
                errores.name = 'Sólo inserte letras y espacios';
            }
            if(!valores.donation){
                errores.donation = 'Ingrese el asunto del mensaje';
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
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log(valores)
          setFormEnviado(true);
          setTimeout(() => {
            setFormEnviado(false);
          }, 3000);
        }}
      >
        {({ values, handleBlur }) => (
          <div className="w-full flex flex-col justify-center items-center min-h-[70vh] px-6 ">
            {/* <p text={main} className="!text-6xl !text-center 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" /> */}
            <Form className="flex w-full flex-col items-center min-h-screen lg:w-[60%] sm:w-[80%] sm:pt-3 " ref={form} >
              {/*  */}
              <div className=" flex w-full flex-col md:w-[85%]">
                <label
                  className="w-full flex justify-start text-lg lg:text-base md:text-sm "
                  htmlFor="name"
                >
                  Nombre y apellido
                </label>
                <Field
                  type="text"
                  className="w-full flex h-10 md:h-14 border rounded-2xl px-5 border-black md:w-[80%] "
                  id="name"
                  name="name"
                  placeholder="Inserte su nombre"
                  value={values.name}
                  onBlur={handleBlur}
                />
                <div className="w-full h-7">
                  <ErrorMessage
                    className="flex justify-start text-red-600 text-sm"
                    name="name"
                    component="div"
                  ></ErrorMessage>
                </div>
              </div>
              <div className="flex w-full flex-col md:w-[85%] ">
                <label
                  className="w-full flex justify-start text-lg lg:text-base md:text-sm"
                  htmlFor="tittle"
                >
                  Monto a donar
                </label>
                <Field
                  type="text"
                  className="w-full flex h-10 md:h-14 border rounded-2xl px-5 border-black md:w-[80%]"
                  id="tittle"
                  name="donation"
                  placeholder="Por ejemplo AR$ 100"
                  value={values.donation}
                  onBlur={handleBlur}
                />
                <div className="w-full h-7">
                  <ErrorMessage
                    className="flex justify-start text-red-600 text-sm"
                    name="donation"
                    component="div"
                  ></ErrorMessage>
                </div>
              </div>
              <div className="flex w-full flex-col md:w-[85%]">
                <label
                  className="w-full flex justify-start text-lg lg:text-base md:text-sm"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <Field
                  className="w-full flex h-25 border rounded-2xl pt-2 px-5 border-black md:w-[80%]"
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
                    className="flex justify-start text-red-600 text-sm"
                    name="user_message"
                    component="div"
                  ></ErrorMessage>
                </div>
              </div>
              <div className="flex items-center justify-center mt-2 lg:self-center">
                <Button className=" mt-4 bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                  Iniciar Sesion
                </Button>
              </div>
              {formEnviado && (
                <p className="flex justify-start text-green-500 text-sm">
                  Formulario enviado con éxito!
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
