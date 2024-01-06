import { Link } from "react-router-dom";
import  photo1  from '../images/featuredsection1.jpg'
import  photo2  from '../images/featuredsection2.jpg'
import  photo3  from '../images/featuredsection3.jpg'

const FeaturedContent = () => {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-6 gap-4 w-full h-full">
      <div className="grid md:col-span-1" style={{ gridTemplateRows: 'auto 1fr' }}>
        <div className="w-full flex justify-center items-center h-20  ">
          <h2>Colaboradores</h2>
        </div>
        <div className="w-full flex justify-center items-center  h-full">
          <ul>
            <li>
              <Link to="www.google.com">
                <h3>MercadoLibre</h3>
              </Link>
            </li>
            <li>
              <Link to="www.google.com">
                <h3>LeoniFy</h3>
              </Link>
            </li>
            <li>
              <Link to="www.google.com">
                <h3>LeoninoStore</h3>
              </Link>
            </li>
            <li>
              <Link to="www.google.com">
                <h3>MercadoPago</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid justify-start md:col-span-4 bg-gray-300 w-full" style={{ gridTemplateRows: 'auto 1fr' }}>
        <div className="flex justify-center items-center h-20  w-full">
          <h2 className="text-center text-2xl">Novedades</h2>
        </div>
        <div className="flex justify-center my-2 items-center">
          <div className="grid grid-cols-3">
            <div className="flex items-center col-span-1" style={{ gridTemplateRows: 'auto 1fr' }}>
            <img src={photo1} className="rounded-xl h-auto md:h-64 object-cover w-full"/>
            </div>
            <div className="col-span-2">
              <h3 className="text-xl mb-2">Noticias</h3>
              <p className="text-md leading-relaxed mb-4">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2 items-center">
          <div className="grid grid-cols-3">
            <div className="flex items-center col-span-1" style={{ gridTemplateRows: 'auto 1fr' }}>
            <img src={photo2} className="rounded-xl h-auto md:h-64 object-cover w-full"/>
            </div>
            <div className="col-span-2">
              <h3 className="text-xl mb-2">Noticias</h3>
              <p className="text-md leading-relaxed mb-4">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2 items-center">
          <div className="grid grid-cols-3">
            <div className="flex items-center col-span-1" style={{ gridTemplateRows: 'auto 1fr' }}>
            <img src={photo3} className="rounded-xl h-auto md:h-64 object-cover w-full"/>
            </div>
            <div className="col-span-2">
              <h3 className="text-xl mb-2">Noticias</h3>
              <p className="text-md leading-relaxed mb-4">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:col-span-1" style={{ gridTemplateRows: 'auto 1fr' }}>
        <div className="flex justify-center items-center h-20 w-full ">
          <h2>Redes Sociales</h2>
        </div>
        <div className="flex justify-center items-center ">
          <ul>
            <li>
              <Link to="www.google.com">
                <h3>Instagram</h3>
              </Link>
            </li>
            <li>
              <Link to="www.google.com">
                <h3>Facebook</h3>
              </Link>
            </li>
            <li>
              <Link to="www.google.com">
                <h3>Twitter</h3>
              </Link>
            </li>
            <li>
              <Link to="www.google.com">
                <h3>TikTok</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
