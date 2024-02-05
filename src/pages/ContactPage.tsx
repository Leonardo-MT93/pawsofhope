import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center w-full h-full px-2 sm:px-6">
      <h2 className="my-10 text-4xl md:text-5xl text-center">
        Lista de Refugios
      </h2>
      <section className="w-full h-full md:w-[95%] xl:w-[85%] relative flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-around border rounded-xl border-pink-500 my-4 p-2">
          <div className="flex flex-col items-center justify-center w-full h-full md:w-[50%] md:h-[300px] xl:h-[400px] ">
            <h2 className="text-lg sm:text-3xl text-balance border border-b-black">Nuestra Feria Americana</h2>
            <h3 className="text-sm sm:text-2xl text-pretty">Los Cedros 581, La Unión, Ezeiza</h3>
            <h3 className="text-sm sm:text-2xl text-pretty">Horario: 10:00 a 17:00</h3>
            <h3 className="text-sm sm:text-2xl text-pretty">Contacto: <Link to="www.google.com">11-3004-5955</Link></h3>
            <Link className="text-xl hover hover:text-pink-400" to="https://maps.app.goo.gl/ub9sg7cPxch44E1h7">Ver ubicación - (Sólo Domingos)</Link>
          </div>
          <div className="w-full md:w-[40%] md:h-[300px] xl:h-[390px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1946.3259739765597!2d-58.53605845123366!3d-34.87338357476983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1707070617126!5m2!1ses!2sar" 
          width="100%" height="100%" className="hidden invisible border:0; md:visible md:block" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-around border rounded-xl border-pink-500 my-4 p-2">
          <div className="flex flex-col items-center justify-center w-full h-full md:w-[50%] md:h-[300px] xl:h-[400px]">
            <h2 className="text-lg sm:text-3xl text-balance border border-b-black">Hogar de paso en Sol de Oro</h2>
            <h3 className="text-sm sm:text-2xl text-pretty">El Alba 1342, La Unión, Ezeiza</h3>
            <h3 className="text-sm sm:text-2xl text-pretty">Horario: 10:00 a 17:00</h3>
            <h3 className="text-sm sm:text-2xl text-pretty">Contacto a coordinar: <Link to="www.google.com">11-3004-5955</Link></h3>
            <Link className="text-xl hover hover:text-pink-400" to="https://maps.app.goo.gl/uiX5zC9Hy1Ajraun8">Ver ubicación</Link>
          </div>
          <div className="w-full md:w-[40%] md:h-[300px] xl:h-[390px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8382201613003!2d-58.5382082232546!3d-34.88540857285458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd76b8b772037%3A0xaa2958ca35e10dc4!2sEl%20Alba%201342%2C%20B1803BIB%20La%20Uni%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707068590083!5m2!1ses!2sar" width="100%" height="100%" className="hidden invisible border:0; md:visible md:block" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-around border rounded-xl border-pink-500 my-4 p-2">
          <div className="flex flex-col items-center justify-center w-full h-full md:w-[50%] md:h-[300px] xl:h-[400px]">
            <h2 className="text-lg sm:text-3xl text-balance border border-b-black">Hogar de paso en La Madrid</h2>
            <h3 className="text-sm sm:text-2xl text-pretty">Tuyucue 845, La Unión, Ezeiza</h3>
            <h3 className="text-sm sm:text-2xl text-pretty">Horario: 10:00 a 17:00</h3>
            <h3 className="text-sm sm:text-2xl text-pretty">Contacto a coordinar: <Link to="www.google.com">11-3004-5955</Link></h3>
            <Link className="text-xl hover hover:text-pink-400" to="https://maps.app.goo.gl/TGsjYsH3kt8oYEb1A">Ver ubicación</Link>
          </div>
          <div className="w-full md:w-[40%] md:h-[300px] xl:h-[390px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.59095338972!2d-58.52309442325531!3d-34.86650407286122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd73aac1f7a15%3A0x15244e3d83202aa1!2sTuyucue%20845%2C%20B1804DMQ%20Ezeiza%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707068754596!5m2!1ses!2sar" width="100%" height="100%" className="hidden invisible border:0; md:visible md:block" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
