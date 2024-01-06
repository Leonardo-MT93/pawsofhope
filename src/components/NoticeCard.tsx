import  photo1  from '../images/featuredsection1.jpg'
import  photo2  from '../images/featuredsection2.jpg'
import  photo3  from '../images/featuredsection3.jpg'

const NoticeCard = () => {
    return (
      <div className="flex  flex-col  gap-4">
          <div className='flex flex-col md:flex-row  gap-4 border border-black' >
            <img
              src={photo1}
              alt="planet-01"
              className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[42px] text-[26px]">
                  Noticia
                </h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                </p>
              </div>
            </div>
          </div> 
          <div className='flex md:flex-row flex-col gap-4 border border-black'>
            <img
              src={photo2}
              alt="planet-01"
              className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[42px] text-[26px]">
                  Noticia
                </h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                </p>
              </div>
            </div>
          </div>
          <div className='flex md:flex-row flex-col gap-4 border border-black'>
            <img
              src={photo3}
              alt="planet-01"
              className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[42px] text-[26px]">
                  Noticia
                </h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default NoticeCard;
