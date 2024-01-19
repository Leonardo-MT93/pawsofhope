const ContactPage = () => {
  return (
    <section className="flex flex-col items-center w-full min-h-screen px-4">
      <h2 className="my-10 text-4xl md:text-5xl text-center">
        ¿Dónde encontrarnos?
      </h2>
      <section className="w-full h-[80vh] md:w-[80%]  relative flex items-center justify-center border border-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
        <iframe className="w-full h-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.0844513445763!2d-58.5251708233517!3d-34.85410527076647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0cdaeaa52e9%3A0x9e80a262fd39710b!2sEzeiza!5e0!3m2!1ses!2sar!4v1705625940452!5m2!1ses!2sar" width="800" height="600"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
